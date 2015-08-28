/** @jsx React.DOM */

var React = require('react/addons');
    $ = require('jquery'),
    FluxCartActions = require('../actions/FluxCartActions'),
    CartStore = require('../stores/CartStore');

var Item = React.createClass({
  
  // Show cart via Actions
  addCart: function(prop){
    FluxCartActions.addToCart(prop);
    console.log("afterAdding: "+JSON.stringify(CartStore.getCartItems(), null, 4));
  },
  render: function(){
  return <li className="prodList col-md-4">
        <img src={this.props.itemName.prodImgSrc} />
        <p className="prodName">{this.props.itemName.prodName}</p>
        <p className="prodName">{"Price : "}{this.props.itemName.fromPrice}</p>
        <button type="button" className="btn btn-default btn-sm" onClick={this.addCart.bind(this,this.props.itemName)} >
          {"Add "}<i className="glyphicon glyphicon-plus" aria-hidden="true" />
        </button>
  </li>
  }

});

  var ProdGrid = React.createClass({
    render: function(){
      var items = this.props.items.map(function(item){
        return <Item itemName={item} />;
      });
      return (<ul>{items}</ul>);
    }
  });


/* Module.exports instead of normal dom mounting */
module.exports = ProdGrid;