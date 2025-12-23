export default {
  entry: "./index.js",
  resolve: {
    pnp: true,
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
  },
};
