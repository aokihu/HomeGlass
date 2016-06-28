'use strict';
var ListMenuComp = function(app){

  app.component('listMenu', {
    templateUrl:'libs/tpls/listMenu.html',
    controller:ListMenuCtrl,
    bindings:{
      "icon":"@",
      "menus":"<",
      "width":"@",
      'onClick':"&"
    }
  })

}

var ListMenuCtrl = function(){

  let ctrl = this;

  this.openMenu = function($mdOpenMenu,ev){
    let originatorEv = ev;
    $mdOpenMenu(ev);
  }

  this._click = function(tab){
    ctrl.onClick({tabIndex:tab})
  }

}
