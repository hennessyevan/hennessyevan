module.exports = {
  plugins: [
    require("postcss-normalize"),
    require("postcss-preset-env")({
      preserve: true,
      features: {
        "logical-properties-and-values": {
          dir: false,
        },
      },
    }),
  ],
}
