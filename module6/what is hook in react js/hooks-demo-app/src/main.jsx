import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import UseState from './components/UseState'
import UseEffects from './components/useEffects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffects />
  </StrictMode>,
)
