import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    client: "src/client/index.ts",
    server: "src/server/index.ts",
    types: "src/types.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: true,
});
