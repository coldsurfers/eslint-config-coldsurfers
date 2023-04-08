module.exports = {
    "env": {
        "es2021": true,
        "node": false
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "jsx": true
    },
    "plugins": [
        "eslint:recommended",
        "@typescript-eslint",
        "prettier",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "rules": {
        "prettier/prettier": "error",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
        ],
        "import/prefer-default-export": "off"
    },
    "ignorePatterns": [
        "node_modules",
        "build",
        "dist",
        "public"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ts", ".jsx", ".tsx"]
            }
        }
    }
}