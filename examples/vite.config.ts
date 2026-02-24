// examples/vite.config.ts
import { defineConfig } from 'vite'  // 现在会优先使用 examples/node_modules/vite
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@kunglad/my-custom-comp': resolve(__dirname, '../packages')
        }
    }
})