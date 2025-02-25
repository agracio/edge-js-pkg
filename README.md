
# edge-js-pkg

1)
Run "npm i"
On a windows machine run the source with "node index.js"
The code works as expected and output ".NET welcomes Node.js"

2) Compiling to EXE using PKG
Run "pkg index.js --targets win -o Edge.exe" (Make sure pkg is installed globally)
Run Edge.exe
Got this error:

Error: The edge module has not been pre-compiled for node.js version v16.16.0. You must build a custom version of edge.node. Please refer to https://github.com/agracio/edge-js for building instructions.
    at determineVersion (C:\snapshot\edge-js-pkg\node_modules\edge-js\lib\edge.js:15:11)
    at Object.<anonymous> (C:\snapshot\edge-js-pkg\node_modules\edge-js\lib\edge.js:28:102)
    at Module._compile (pkg/prelude/bootstrap.js:1930:22)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at Module.require (pkg/prelude/bootstrap.js:1855:31)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (C:\snapshot\edge-js-pkg\index.js)



