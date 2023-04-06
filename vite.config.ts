import { defineConfig } from 'vite'
import ReactivityTransform from "@vue-macros/reactivity-transform/dist/vite";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ReactivityTransform(),
  ],
})
