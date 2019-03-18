/**
 * Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
 * @example
 * {{{{raw}}}}
 * {{ this }} code won't be parsed.
 * {{{{/raw}}}}
 */
module.exports = function(content) {
  return content.fn();
};

// Example file src/helpers/bold.js
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var subheader =
    '<row class="subheader"><columns><spacer size="24"></spacer><h6 class="subheader-text">' +
    options.fn(this) +
    "</h6></columns></row>";
  return subheader;
};
