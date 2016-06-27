'use strict';
var ClockComp = function(app){

  app.component('clock', {
    template:"<span>{{$ctrl.now}}</span>",
    controller:ClockCompCtrl
  })

}

var ClockCompCtrl = function($interval){

  let ctrl = this;

  let now = new Date();
  ctrl.now = moment().format('HH:mm')

  $interval(() => {

    ctrl.now = moment().format('HH:mm')
  }, 6000)

}
