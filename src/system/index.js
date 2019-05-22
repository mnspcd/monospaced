import colors, { opacity } from "./color";
import mediaQueries from "./mediaQueries";
import typography from "./typography";

export const extensions = mediaQueries;
export const variables = Object.assign({}, colors, opacity, typography);

export default {
  extensions,
  variables,
};
