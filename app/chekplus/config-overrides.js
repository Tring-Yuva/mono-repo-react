const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@ecomm/app-ui": path.resolve(__dirname, "../../packages/ui/src"),
    "@ecomm/app-common": path.resolve(__dirname, "../../packages/common/src"),
  })
);
