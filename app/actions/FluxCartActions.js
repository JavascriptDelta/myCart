var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');
var Api = require('../utils/setDataDefault');

// Define action methods
var FluxCartActions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  getProducts: function () {
    Api
      .get('/json')
      .then(function (data) {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.RECEIVE_DATA,
          data: data
        });        
      })
      .catch(function () {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.RECEIVE_ERROR,
          error: 'There was a problem getting the categories'
        });      
      });
  },
  // Add item to cart
  addToCart: function(update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      update: update
    })
  }

};

module.exports = FluxCartActions;
