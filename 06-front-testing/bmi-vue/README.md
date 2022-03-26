# bmi-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Agrego vue cli

```
npm i -g @vue/cli
```

### Agrego unit jest

```
vue add unit-jest
```

### Ejecuto test unitarios

```
npm run test:unit
```

### Instalar Jest en el proyecto

```
yarn add -D @testing-library/vue @testing-library/jest-dom
```


## cypress

```
yarn add -D cypress
npx cypress open
```

## cypress eslint

yarn add eslint-plugin-cypress -D

en el directorio de cypress poner el siguente .eslintrc.js

```
module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['plugin:cypress/recommended'],
  env: {
    'cypress/globals': true,
  },
}
```
