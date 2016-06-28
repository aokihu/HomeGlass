'use strict';
var MusicCardComp = function(app){

  app.component('musicCard', {
    templateUrl:'libs/tpls/musicCard.html',
    controller:MusicCardCtrl
  })

}

var MusicCardCtrl = function($interval){

  this.menus = [
    {icon:'library_books',title:"音乐库",tab:1},
    {icon:'radio',title:'在线收音机',tab:2}
  ]

  this.clickMenu = function(tabIndex){
    
  }

}
