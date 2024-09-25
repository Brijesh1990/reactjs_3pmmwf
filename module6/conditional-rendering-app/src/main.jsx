import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import IfApp from './components/IfApp'
// import TernaryApp from './components/TernaryApp'
// import NestedIf from './components/NestedIf'
// import IfElseIfApp from './components/IfElseIfApp'
import LoopApp from './components/LoopApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <IfApp  age={true} /> */}
    {/* <TernaryApp /> */}
    {/* <NestedIf a={true} b={true} /> */}
    {/* <IfElseIfApp  /> */}
    <LoopApp />
  </StrictMode>,
)
