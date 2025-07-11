// eslint.config.js
import stylistic from "@stylistic/eslint-plugin";

export default [
    {
        "plugins": {
            "@stylistic": stylistic
        },
        "languageOptions": {
            "ecmaVersion": 2022,
            "sourceType": "module"
        },
        "linterOptions": {
            "reportUnusedDisableDirectives": true
        },
        "rules": {
            ...stylistic.configs.all.rules
        }
    }
];
