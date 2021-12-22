// config-overrides.js
//this is for the error Error: Babel plugin 'react-optimized-image/plugin' not installed or this component could not be recognized by it.
const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.(png|jpe?g|webp|tiff?)$/i,
    use: [
      "file-loader",
      {
        loader: "webpack-image-resize-loader",
        options: {
          width: 1000,
        },
      },
    ],
  })
);
