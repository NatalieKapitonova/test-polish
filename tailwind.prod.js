const config = require("./tailwind.config");

config.purge = {
  enabled: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
};

module.exports = config;
