import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo is served from https://khushi-choudhary11.github.io/Portfolio/,
  // so asset URLs must be prefixed with the repo name, not the domain root.
  base: '/Portfolio/',
})
