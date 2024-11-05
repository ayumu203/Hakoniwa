import { ChakraProvider,createSystem, defineConfig  } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(config);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
