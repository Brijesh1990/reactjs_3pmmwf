import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import ProductData from './components/ProductData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductData />
  </StrictMode>,
)
