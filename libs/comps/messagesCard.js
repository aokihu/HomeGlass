'use strict';
var MessagesCardComp = function(app){

  app.component('messagesCard', {
    templateUrl:'libs/tpls/messagesCard.html',
    controller:MessagesCardCtrl
  })

}

var MessagesCardCtrl = function($interval , MessageService){

  this.messages = MessageService.messages;

  this.menus = [
    {icon:"delete_forever",title:"清除所有消息",tab:1}
  ]

  this.clickMenu = function(tab){

  }

}
