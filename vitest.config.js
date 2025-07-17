import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'


export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        enviroment: "jsdom"
    },
    resolve: {
        alias: {
        '@': path.resolve(__dirname, './app'), // or wherever your @ points
        },
    }
})