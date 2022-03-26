# Introducción al testing automatizado en Javascript

### Contenidos:

- Fundamentos de testing en Javascript
- Herramientas de análisis de código
- Ejecutar pruebas de manera fácil y rápida con Jest
- Fundamentos para Mocks en Jest
- Introducción a pruebas en aplicaciones frontend con DOM Testing Library y Cypress
- Aplicar pruebas unitarias, de integración y e2e en una app de React
- Pruebas para backend en una api con Node JS y Express
- Introducción a Test Driven Development en React

# Jest

https://jestjs.io/docs/using-matchers

```
npm test -- --watch jest-matchers.test.js
```

# Jest custom matchers

https://github.com/jest-community/jest-extended

```
npm test path/to/my.test.js
npm test -- --coverage
```

# Jest CLI

```
https://jestjs.io/es-ES/docs/cli
```

## Material adicional obligatorio

https://www.youtube.com/watch?v=Rqyg8kjpzX0&list=PLkr7dGY4D2sOQrmOcae2BBbeYZc7B5Fkq&index=4&t=976s

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

https://docs.cypress.io/guides/references/assertions#Class

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

## cypress testing-library

```
yarn add -D @testing-library/cypress
```

## Prettier

```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```