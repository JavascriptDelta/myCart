    /** @jsx React.DOM */

var React = require('react/addons'),
	ReactApp = require('./components/ReactApp'),
	jsonData = require('./data/jsonData.js').jsonData,	
	mountNode = document.getElementById("react-main-mount");
	
	React.render(new ReactApp({}), mountNode);
	