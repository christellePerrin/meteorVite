
//Session.setDefault('function',0)
Template.login.events({
  'submit form': function(event){
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    console.log("Formulaire de connexion envoyé")
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
  //        Router.go("home");
});

Template.login.helpers({
  //function + return
});

Template.dashboard.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});

// Meteor.user.find().fetch();

Template.dashboard.helpers({
  //function + return
})

//créer les comptes autorisés à accéder au site
