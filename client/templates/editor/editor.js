import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { render } from 'react-dom';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

/*  _onBoldClick(){
  this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
}*/


handleKeyCommand(command, editorState){
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return 'handled';
  }
  return 'not-handled';
}

render() {
  return (
/*    <div>
          <div>
        <button onClick = {this._onBoldClick.bind(this)}>B</button>
      </div>*/
      <div>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
/*    </div>*/
  );
}
}

Meteor.startup(() => {
  render(<MyEditor />, document.getElementById('editor-render-target'));
})

/*ReactDOM.render(
<MyEditor />,
document.getElementById('container')
);
*/
