import colors, { opacity } from "./color";
import mediaQueries from "./mediaQueries";
import typography from "./typography";

module.exports = {
  extensions: mediaQueries,
  variables: Object.assign({}, colors, opacity, typography),
};
