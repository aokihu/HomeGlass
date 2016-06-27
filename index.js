var HomeGlassApp = angular.module('HomeGlassApp',['ngMaterial'])

HomeGlassApp
// Controller定义
.component('musicCard',{
  template:"Music card"
})


MessageService(HomeGlassApp);
ClockComp(HomeGlassApp);

MessagesCardComp(HomeGlassApp);
WeatherCardComp(HomeGlassApp);
SwitchsCardComp(HomeGlassApp);
ToolbarComp(HomeGlassApp);
