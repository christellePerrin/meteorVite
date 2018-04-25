var data = [{titre:"Chose 1"},{titre:"Chose 3"},{titre:"Chose 3"},{titre:"Chose 4"}]


Template.listeChoses.helpers({
  "choses" : function(){
    return Choses.find()
  }
})

Template.ajouterChose.events({
  "click button" : function(event, template){
    var nouvelleChose = template.find("input").value;
    Choses.insert({titre: nouvelleChose})
  }
})



Template.afficherUneChose.onCreated(function(){
  instance = this

  instance.choseCourante = new ReactiveVar({_id:""})

})

Template.afficherUneChose.helpers({
  "choseCourante" : function(){
    instance = Template.instance();
    //console.log(instance.choseCourante.get())

    return instance.choseCourante.get()._id == this._id;
  }
})



Template.afficherUneChose.events({
  "click .supprimemoi" : function(e,t){
    console.log(this)
    if(confirm("Are U SUR ?")){
      Choses.remove(this._id)
    }
  },
  "click .editemoi" : function(e,instance){
    instance.choseCourante.set(this)
  }
})
