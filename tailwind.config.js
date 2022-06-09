const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    minWidth: {
      64: "16rem",
    },
    colors: {
      ...colors,
      primary: {
        ...colors.trueGray,
      },
      secondary: {
        ...colors.fuchsia,
      },
      error: {
        ...colors.rose,
      },
      warning: {
        ...colors.amber,
        DEFAULT: colors.amber["400"],
      },
      success: {
        ...colors.green,
      },
      warning: {
        ...colors.amber,
        DEFAULT: colors.amber["400"],
      },
    },
    extend: {
      animation: {
        ping100: "ping 1s infinite 100ms",
        ping200: "ping 1s infinite 200ms",
        ping300: "ping 1s infinite 300ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
