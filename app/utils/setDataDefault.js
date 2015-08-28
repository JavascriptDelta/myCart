var FluxCartActions = require('../actions/FluxCartActions');
var Request = require('superagent');
var jsonData = require('../data/jsonData').jsonData;
var Promise = require('es6-promise').Promise;

module.exports = {
  /*setJsonDataAjax: function() {
      Request
         .get('/json')
         .send({})
         .end(function(err, res){
           if (res.ok) {
            FluxCartActions.receiveProduct(res.body);

           } else {
            	FluxCartActions.receiveProduct(jsonData);
           }
         });

  },
  setJsonDataFile: function(jsonData) {	
    FluxCartActions.receiveProduct(jsonData);
  },*/
  get:function(url){
    return new Promise(function (resolve, reject) {
      Request
        .get(url)
        .end(function (err,res) {
          if (res.status === 404) {
            console.log("404 not found")
            reject();
          } else {
            console.log("success");
            console.log(res)
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
  
};