
## Single executable packaging example for edge-js using @yao-pkg/pkg

### Single executable option

- Supports using calls to dll methods.
- Does not support inline C# or .csx files.

### Single executable with node_modules

- Supports using calls to dll methods.
- Support inline C# and .csx files.
- Inline C# code must use ES6 templated strings instead of comments.
- Requires `node_modules/edge-js` and `node_modules/edge-cs` to be in the same folder with executable.

### How to run

- `npm i`
- `dotnet build src/EdgeJsPkg.sln`

#### Single executable

- `npm run pkg`
- `edge.exe`

#### Single executable with node_modules

- `npm run pkg-webpack`
- `edge-webpack.exe`
