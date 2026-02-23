import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react"; // 1. Importer le plugin
import path from "path";
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["import"],
                quietDeps: true,
                additionalData: `@import "@src/scss/variables.scss";`,
            },
        },
    },
    plugins: [
        laravel({
            input: ["resources/scss/app.scss", "resources/js/app.tsx"],
            refresh: true,
        }),
        react(),
    ],
    server: {
        watch: {
            ignored: ["**/storage/framework/views/**"],
        },
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "resources"),
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        },
    },
});
