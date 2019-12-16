module.exports = {
    "extends": "airbnb",
    rules: {
        "linebreak-style": ["error", "windows"],
        "no-console": ["error", { 
            allow: ["log", "warn", "error"] 
        }],
        "comma-dangle": 0
    }
};