
const edge = require('edge-js');

const hello = edge.func(function () {/*
	async (input) =>
	{
		return ".NET welcomes " + input.ToString();
	}
*/});

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});
