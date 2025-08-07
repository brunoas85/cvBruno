import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Este base tiene que coincidir con el nombre de tu repo en GitHub
export default defineConfig({
  base: '/cvBruno/',
  plugins: [react()],
})
