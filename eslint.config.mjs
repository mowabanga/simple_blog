import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

let __filename;
let __dirname;

try {
  __filename = fileURLToPath(import.meta.url);
  __dirname = dirname(__filename);
} catch (error) {
  console.error("Error resolving __dirname and __filename:", error);
}

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
