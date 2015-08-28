/** @jsx React.DOM */

var React = require('react/addons');

var items = ['MEN','WOMEN','KIDS','BRANDS','SCHOOL UNIFORM','SALE'];

var Item = React.createClass({
  render: function(){
  return  <li ><a>{this.props.itemName}</a></li>
  }

});

  var NavList = React.createClass({
    render: function(){
      var items = this.props.items.map(function(item){
        return <Item itemName={item} />;
      });

      return (<ul className='top-cat'>{items}</ul>);
    }
  });

  var NavPanel = React.createClass({
  componentDidMount: function () {
     // alert('NavPanel--');
  
      },
    render: function () {
        return (
          <div id="">
            <NavList items={items} />
          </div>
        )
      }
  });


/* Module.exports  */
module.exports = NavPanel;