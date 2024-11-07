import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './components/List'.
import New from './components/New'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <New />
  </StrictMode>,
)
