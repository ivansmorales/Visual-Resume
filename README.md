# Getting Started with Create React App

`npx create-react-app my-app --template typescript`
`npm install node-sass@^4.14.1 --save`

## React-router-dom

`npm install --save react-router-dom`
`npm install --save @types/react-router-dom`

## Craco
`npm install @craco/craco --save`

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
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@helpers': path.resolve(__dirname, 'src/lib/helpers/'),
      '@hocs': path.resolve(__dirname, 'src/lib/hocs/'),
      '@hubs': path.resolve(__dirname, 'src/lib/hubs/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@samples': path.resolve(__dirname, 'src/samples/'),
      '@screens': path.resolve(__dirname, 'src/screens/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@utils': path.resolve(__dirname, 'src/lib/utils/'),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')],
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