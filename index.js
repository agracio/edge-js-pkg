
//var edge = require('edge-js').createRequire();
// const { createRequire } = require('node:module');
// require = createRequire(__filename); 
var edge = require('edge-js')

var hello = edge.func(function () {/*
	async (input) =>
	{
		return ".NET welcomes " + input.ToString();
	}
*/});

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});
