// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({ // 自动生成 .d.ts 文件，提供类型提示
      entryRoot: './packages',
      outDir: ['dist/es', 'dist/lib']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'), // 入口文件
      name: 'MyCustomComp', // 全局变量名（UMD格式用）
      fileName: (format) => `index.${format}.js` // 输出文件名
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // 将 React 视为外部依赖，不打包进库
      output: [
        {
          format: 'es', // ES 模块格式（现代项目使用）
          dir: 'dist/es',
          preserveModules: true, // 保持目录结构，支持按需引入
        },
        {
          format: 'cjs', // CommonJS 格式（Node.js 环境）
          dir: 'dist/lib',
          preserveModules: true,
        }
      ]
    }
  }
})