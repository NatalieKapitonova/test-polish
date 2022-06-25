import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-polish/",
  test: {
    // ...
    // http://2442-194-181-242-209.ngrok.io
  },
  // server: {
  //   proxy: {
  //     "^/api/.*": {
  //       target: "http://2442-194-181-242-209.ngrok.io",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      config: path.resolve(__dirname, "./src/config"),
    },
  },
});
