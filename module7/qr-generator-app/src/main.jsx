import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QrGeneratorApp from './components/QrGeneratorApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrGeneratorApp />
  </StrictMode>,
)
