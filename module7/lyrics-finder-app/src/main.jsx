import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LyricsApp from './components/LyricsApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LyricsApp />
  </StrictMode>,
)
