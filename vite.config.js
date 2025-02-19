import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        manifest: false,
        rollupOptions: {
            input: {
                app: resolve(__dirname, "src/index.html"),
            },
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            },
        },
    },
});
