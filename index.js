
const path = require('path');

const nodeVersion = process.versions.node.split(".")[0];

process.env.EDGE_NATIVE = path.resolve(__dirname, `node_modules/edge-js/lib/native/win32/x64/${nodeVersion}/edge_coreclr.node`);
console.log('process.env.EDGE_NATIVE:' ,process.env.EDGE_NATIVE);

let dirname = process.pkg ? path.dirname(process.execPath) : __dirname;
process.env.EDGE_APP_ROOT = path.resolve(dirname, 'lib');
console.log('process.env.EDGE_APP_ROOT:' ,process.env.EDGE_APP_ROOT);

process.env.EDGE_USE_CORECLR=1;

const edge = require('edge-js');

const getAppDomain = edge.func({
    assemblyFile: 'lib/EdgeJsPkg.dll', 
    typeName: 'EdgeJsPkg.Methods',
    methodName: 'GetAppDomainDirectory'
});

const getCurrentTime = edge.func({
    assemblyFile: 'lib/EdgeJsPkg.dll', 
    typeName: 'EdgeJsPkg.Methods',
    methodName: 'GetCurrentTime'
});

const useDynamicInput = edge.func({
    assemblyFile: 'lib/EdgeJsPkg.dll', 
    typeName: 'EdgeJsPkg.Methods',
    methodName: 'UseDynamicInput'
});

console.log();

getAppDomain('', function (error, result) {
    if (error) throw error;
    console.log('EdgeJsPkg.Methods.GetAppDomainDirectory: ', result);
    console.log();
});

getCurrentTime('', function (error, result) {
    if (error) throw error;
    console.log('EdgeJsPkg.Methods.GetCurrentTime: ', result);
    console.log();
});

useDynamicInput({framework: '.NET CoreCLR', node: 'Node.js'}, function (error, result) {
    if (error) throw error;
    console.log('EdgeJsPkg.Methods.UseDynamicInput: ', result);
    console.log();
});
