# Create Expor React Native App

This project is a example of how to use [Expo](https://expo.io/) to create a React Native App.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [Expo Go](https://expo.io/tools#client) (Android or iOS)
-   [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)

```bash
npm install -g @expo/cli
```

### Steps

1. Use `create-expo-app` to create a new project

```bash
npx create-expo-app@latest my-app --template
```

2. Choose the template you want to use

```bash
? Choose a template: » - Use arrow-keys. Return to submit.
    Blank
>   Blank (TypeScript) - blank app with TypeScript enabled
    Navigation (TypeScript)
    Blank (Bare)
```

3. Install dependencies

```bash
npm i react-dom react-native-web@~0.19.6 @expo/webpack-config@^19.0.0
npm i -D @types/react-dom prettier eslint eslint-config-universe @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

4. Create a `.prettierrc` file

```json
{
    "tabWidth": 4,
    "bracketSameLine": true
}
```

5. Create a `.eslintrc.js` file

```js
module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "universe/native",
    ],
    ignorePatterns: ["dist", ".eslintrc.js"],
    parser: "@typescript-eslint/parser",
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_" },
        ],
    },
};
```

6. Modify `tsconfig.json` file to look like this

```json
{
    "extends": "expo/tsconfig.base",
    "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020"],
        "module": "ESNext",
        "skipLibCheck": true,

        /* Bundler mode */
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-native",

        /* Linting */
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true
    }
}
```

7. Start the project

```bash
npm start
```
