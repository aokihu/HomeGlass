'use strict';

var WeatherCardComp = (app) => {

  app.component('weatherCard', {
    templateUrl:"libs/tpls/weatherCard.html",
    controller:WeatherCardCompCtrl
  })

}

function WeatherCardCompCtrl($scope, $element, $attrs, $http, $interval){

  let ctrl = this;
  let weatherApiUrl = "http://apis.baidu.com/heweather/weather/free";


  fetchWeatherInfo();
  $interval(fetchWeatherInfo, 3000 * 3600)

  function fetchWeatherInfo(){

    // 获取天气信息
    $http({
      method:"GET",
      url:weatherApiUrl,
      params:{city:Configure.city},
      headers:{apikey:Configure.baiduApiKey}
    })
    .then(response => {
      let data = response.data['HeWeather data service 3.0'][0];
      console.log(data);

      ctrl.qlty    = data.aqi.city.qlty;
      ctrl.city    = data.basic.city;
      ctrl.highTmp = data.daily_forecast[0].tmp.max;
      ctrl.lowTmp  = data.daily_forecast[0].tmp.min;

      ctrl.daily = data.daily_forecast.slice(1,5);
    })
    .catch(err => {
      console.error(err)
    })
  }

}
