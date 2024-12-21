import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                console: true, // Enable global variable `console`
                process: true, // Enable global variable `process`
                // Add other globals if needed
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            //"no-console": "error"
        },

        
        ignores: ["dist", "node_modules"], // Ignore unnecessary directories
    },
];
