function MessageService(app){

  app.service('MessageService', function(){

    this.messages = [
      {
        type:"alarm",
        repeate:null,
        text:"test"
      }
    ];

  })

}
