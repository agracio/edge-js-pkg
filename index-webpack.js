
const path = require('path');

const nodeVersion = process.versions.node.split(".")[0];

process.env.EDGE_NATIVE = path.resolve(__dirname, `node_modules/edge-js/lib/native/win32/x64/${nodeVersion}/edge_coreclr.node`);
console.log('process.env.EDGE_NATIVE:' ,process.env.EDGE_NATIVE);

process.env.EDGE_APP_ROOT = path.resolve(__dirname, 'lib');
console.log('process.env.EDGE_APP_ROOT:' ,process.env.EDGE_APP_ROOT);

process.env.EDGE_CS_NATIVE = path.resolve(__dirname, 'node_modules/edge-cs/lib/edge-cs-coreclr.dll');
console.log('process.env.EDGE_CS_NATIVE:' ,process.env.EDGE_CS_NATIVE);

process.env.EDGE_USE_CORECLR=1;

const edge = require('edge-js');

// Requires ES6 templated strings
const getPerson = edge.func(`
    using System.Threading.Tasks;
    using System;

    public class Person
    {
        public Person(string name, string email, int age)
        {
            Id =  Guid.NewGuid();
            Name = name;
            Email = email;
            Age = age;
        }
        public Guid Id {get;}
        public string Name {get;set;}
        public string Email {get;set;}
        public int Age {get;set;}
    }

    public class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            return new Person(input.name, input.email, input.age);
        }
    }
`);

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

getPerson({name: 'John Smith', email: 'john.smith@electron-edge-js-quick-start.com', age: 35}, function (error, result) {
    if (error) throw error;
    console.log('EdgeJsPkg.getPerson: ', result);
    console.log();
});


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
