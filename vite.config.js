import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // IMPORTANT: Change 'my-portfolio' to your exact GitHub repository name
  base: "/",
  plugins: [react(), tailwindcss()],
});
