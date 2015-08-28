var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var _prodData;

// Add product to cart
function add(update) {
  var newData = parseInt(_prodData.cart.count)+1;
  _prodData = _.extend({},{
    "cart":{
        "price": 5,
        "count": newData
    }
});
}

// Method to load product data from mock API
function loadProductData(data) {
  _prodData = _.extend({},data);
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var CartStore = _.extend({}, EventEmitter.prototype, {

  // Return cart items
  getCartItems: function() {
    return _prodData.cart;
  },

  // return prod list
  getProdList: function(){
    return _prodData.product;
  },


  // Return cart visibility state
  getCartVisible: function() {
    return _cartVisible;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;


  switch(action.actionType) {

    // Respond to CART_ADD action
    case FluxCartConstants.CART_ADD:
      add(action.update);
      break;

    // Respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;
    
    default:
      return true;
  }

  // If action was responded to, emit change event
  CartStore.emitChange();

  return true;

});

module.exports = CartStore;
