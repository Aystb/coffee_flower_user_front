import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        // 在所有组件的样式中自动引入 uview-plus 的 theme.scss
        additionalData: `@import "@/uni_modules/uview-plus/theme.scss";`
      }
    }
  }
});

