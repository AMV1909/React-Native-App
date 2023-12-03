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
