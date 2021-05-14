# Getting Started with Create React App

## Create app

```
`npx create-react-app my-app --template typescript`
```

## Node sass

```
npm install node-sass@^4.14.1 --save
```

## MATERIAL-UI

```
npm install @material-ui/core
npm install @material-ui/icons
```

## React-router-dom

```
npm install --save react-router-dom
npm install --save @types/react-router-dom`
```

## Craco

```
npm install @craco/craco --save
```

### Actualizar los scripts del package.json con craco

"start": "craco start",
"build": "craco build",
"test": "craco test",

Crear el archivo craco.config.js en raíz. El código útil está en la siguiente sección.

// craco.config.js
const path = require('path');
require('dotenv').config({ path: '.env' });

module.exports = {
webpack: {
alias: {
// Add the aliases for all the top-level folders in the `src/` folder.
'@components': path.resolve(**dirname, 'src/components/'),
'@containers': path.resolve(**dirname, 'src/containers/'),
'@helpers': path.resolve(**dirname, 'src/lib/helpers/'),
'@hocs': path.resolve(**dirname, 'src/lib/hocs/'),
'@hubs': path.resolve(**dirname, 'src/lib/hubs/'),
'@models': path.resolve(**dirname, 'src/models/'),
'@samples': path.resolve(**dirname, 'src/samples/'),
'@screens': path.resolve(**dirname, 'src/screens/'),
'@store': path.resolve(**dirname, 'src/store/'),
'@theme': path.resolve(**dirname, 'src/theme/'),
'@utils': path.resolve(**dirname, 'src/lib/utils/'),
},
},
style: {
sass: {
loaderOptions: {
sassOptions: {
includePaths: [path.resolve(**dirname, 'src')],
},
additionalData: process.env.PUBLIC_URL
? '$baseurl: ' + process.env.PUBLIC_URL + ';'
          : '$baseurl: "";',
},
},
},
};

// prependData ref
// https://stackoverflow.com/questions/58174234/how-i-can-pass-environment-variables-to-scss-sass-file-using-laravel-mix-and-we

Crear ts.config.json
Crear tsconfig.json
