/** @type {import("stylelint").Config} */
export default {
    plugins: [
        "stylelint-scss",
        "@stylistic/stylelint-plugin"
    ],
    extends: [
        "stylelint-config-standard-scss",
    ],
    rules: {
        // syntax rules from stylelint:
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",

        // stylistic rules from @stylistic/stylelint-plugin:
        "@stylistic/indentation": 4,
    }
};
