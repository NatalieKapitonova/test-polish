import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    // ...
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, "./src/config"),
    },
  },
});
