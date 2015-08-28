/** @jsx React.DOM */

var React = require('react/addons'),
    FluxCartActions = require('../actions/FluxCartActions');
    

var MinibagPanel = React.createClass({

	render:function(){
    
		return <div className="dropdown">
        <a className="cart__link">
          <div className="cart-count">{"[ BAG "}
            <span className="cart-count__price" ref="cartCountPrice">{this.props.countObj.price}</span>
                    {"("}<span className="cart-count__value">{this.props.countObj.count}</span>{") ]"}
          </div>
        </a>
        <div className="dropdown-menu " role="menu" aria-labelledby="dLabel ">
          <section id="minibag-contents">
                       <form id="" action="" className="cart-form">
                          <ul className="cart-item">
                            <li className="cart-item__img">
                                    <a href="#">
                                        <img src="data:image/jpeg;base64,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" alt="" />
                                    </a>
                                </li>
                                <li className="cart-item__text ">
                                    <a href="#">
                                        Jacquard Dress
                                    </a>
                                    <strong>Yellow / 6</strong>
                                    <strong>QTY:  <span id="">1</span></strong>
                                </li>
                                <li className="cart-item__price ">
                                    <span id="">€62.00</span>
                                </li>
                          </ul>
                       </form>
                       <i className="glyphicon glyphicon-remove" >X</i>
                  </section>
                  <section className="cart-subTotal">
                            <p className="cart-cartSubtotal" >Subtotal € <strong id="minicartSubtotal">89.00</strong></p>                  
                        </section><br />
                        <footer>
                        <button className="btn btn-primary btn-sm">View Bag</button></footer>  
        </div>
      </div>
  }
	
});


var MiniBag = React.createClass({
  render: function(){
    return <MinibagPanel countObj={this.props.cart} />
    }
  });

/* Module.exports  */
module.exports = MiniBag;
