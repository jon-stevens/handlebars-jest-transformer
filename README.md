# handlebars-jest-transformer
Handlebars transformer for Jest

# To enable the processor add the rule to the transform object in your jest configuration:

```"jest": {
    // ...
    transform: {
        "\\.hbs$": "<rootdir>/handlebars-jest-transformer.js",
    }
    // ...
}```

Handlebars files will get compiled by the processor and the render function imported.


