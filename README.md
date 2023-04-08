# Install

```bash
npm i -D eslint-config-coldsurfers # or yarn install --dev eslint-config-coldsurfers
npx install-peerdeps --dev eslint-config-coldsurfers
```

# ESlint Config Setting

`.eslintrc`

```json
{
  "extends": [
    "coldsurfers", // for nodejs-typescript, or 'coldsurfers/nodejs-typescript'
    "coldsurfers/react-typescript" // for react-typescript
  ]
}
```

Basically, extending just `coldsurfers` is for nodejs-typescript eslint configuration.

# Prettier Config Setting

`.prettierrc.json`

```json
{
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true
}
```