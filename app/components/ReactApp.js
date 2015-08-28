/** @jsx React.DOM */

var React = require('react/addons');
    Grid = require('./ProdGrid'),
    MiniBag = require('./MiniBag'),
    NavPanel = require('./NavPanel'),
    FluxCartActions=require('../actions/FluxCartActions'),
    CartStore = require('../stores/CartStore'),
    DefaultData =  require('../utils/setDataDefault'),
    jsonData = require('../data/jsonData').jsonData;
    

var ReactApp = React.createClass({
      
  getInitialState:function(){
    FluxCartActions.getProducts();
    return {
      cart:jsonData.cart,
      products:jsonData.product
    }
  },
  componentWillMount: function(){
    //DefaultData.setJsonDataFile(jsonData);
  },

  componentDidMount: function () {
    CartStore.addChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({ cart: CartStore.getCartItems()})
  },  
  render: function () {
   return (
      <div id="">
        <NavPanel/>
        <MiniBag cart={this.state.cart}/>
        <Grid items={this.state.products} />
      </div>
    )
  }
});
/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;