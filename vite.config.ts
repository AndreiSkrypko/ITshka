import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Оптимизация сборки
    target: 'esnext',
    minify: 'esbuild', // Быстрая минификация
    cssMinify: true,
    sourcemap: false, // Отключаем sourcemaps для production
    rollupOptions: {
      output: {
        // Code splitting для лучшей загрузки
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'ui-vendor': ['lucide-react'],
          'helmet': ['react-helmet-async'],
        },
        // Оптимизация имен файлов
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Увеличиваем лимит предупреждений для больших чанков
    chunkSizeWarningLimit: 1000,
    // Оптимизация CSS
    cssCodeSplit: true,
  },
  // Оптимизация зависимостей
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'i18next',
      'react-i18next',
    ],
  },
});
