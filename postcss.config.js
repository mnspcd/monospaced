const { extensions, variables } = require("./src/system");

module.exports = () => ({
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      features: {
        customMedia: { extensions },
        customProperties: { variables },
      },
    },
  },
});
