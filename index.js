module.exports = {
    "extends": [
        "eslint:recommended",
    ],
    "ignorePatterns": [
        "node_modules/**/*",
        "dist/**/*",
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
    ],
    "noInlineConfig": true,
    "reportUnusedDisableDirectives": true,
    "rules": {
        "arrow-body-style": ["error", "as-needed"],
        "block-scoped-var": "error",
        "camelcase": ["error", {"properties": "never"}],
        "class-methods-use-this": "error",
        "consistent-return": "error",
        "curly": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "func-names": "error",
        "multiline-comment-style": ["error", "separate-lines"],
        "new-cap": "error",
        "no-empty-function": "error",
        "no-extra-bind": "error",
        "no-invalid-this": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "spaced-comment": "error",
        "require-await": "error",
        "prefer-object-spread": "error",
        "prefer-destructuring": "error",
        "prefer-const": "error",
        "object-shorthand": "error",
        "no-var": "error",
        "no-useless-return": "error",
        "no-underscore-dangle": "error",
        "no-shadow": "error",
        "no-param-reassign": "error",
        "array-bracket-newline": ["error", "consistent"],
        "array-element-newline": ["error", "consistent"],
        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": "error",
        "block-spacing": ["error", "never"],
        "brace-style": ["error", "1tbs"],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "dot-location": ["error", "property"],
        "eol-last": "error",
        "func-call-spacing": ["error", "never"],
        "function-paren-newline": ["error", "multiline-arguments"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}],
        "keyword-spacing": "error",
        "lines-between-class-members": ["error", "always", {"exceptAfterSingleLine": true}],
        "max-statements-per-line": ["error", {"max": 1}],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-extra-parens": ["error", "all", {"ignoreJSX": "all"}],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": ["error", {"consistent": true}],
        "object-curly-spacing": "error",
        "object-property-newline": ["error", {"allowAllPropertiesOnSameLine": true}],
        "padded-blocks": ["error", "never"],
        "quotes": ["error", "double"],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", {"words": true, "nonwords": false}],
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": "error",
    },
};
