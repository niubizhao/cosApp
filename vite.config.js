import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // Vue 3 单文件组件支持
import path from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: '@/assets',
      utils: '@/utils',
      api: '@/api'
    }
  },
  plugins: [
    vue(),
    styleImport({
      // 按需引入vant
      resolves: [VantResolve()]
    })
  ],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/v1': {
        target: 'http://localhost:8001'
      }
    }
  },
  // Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      },
      scss: {
        additionalData: `@import "src/styles/vw-rem/_util.scss";
                     @import "src/styles/vw-rem/_border.scss";
                     @import "src/styles/func.scss";`
      }
    },
    // TODO 构建包含@charset问题 https://github.com/vitejs/vite/issues/5833
    postcss: {
      plugins: [
        require('autoprefixer'),
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    }
  }
})
