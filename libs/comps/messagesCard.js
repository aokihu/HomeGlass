'use strict';
var MessagesCardComp = function(app){

  app.component('messagesCard', {
    templateUrl:'libs/tpls/messagesCard.html',
    controller:MessagesCardCtrl
  })

}

var MessagesCardCtrl = function($interval , MessageService){

  this.messages = MessageService.messages;

}
