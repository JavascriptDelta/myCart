var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp')),
jsonData=require('../data/jsonData.js').jsonData;

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = React.renderToString(ReactApp({}));
	    res.render('index.ejs', {reactOutput: reactHtml});
	});
	app.get('/json', function(req, res){
	    res.json(jsonData);
	});
	

};