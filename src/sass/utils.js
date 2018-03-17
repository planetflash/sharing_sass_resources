const path = require("path");

const resources = ["_variables.scss", "_mediaQueries.scss", "_mixins.scss"];

module.exports = resources.map(file => path.resolve(__dirname, file));
