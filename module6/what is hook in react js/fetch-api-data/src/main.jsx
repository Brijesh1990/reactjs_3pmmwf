import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserApiData from './components/UserApp'
import './index.css'
// import FetchApiData from './components/FetchApiData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FetchApiData /> */}
    <UserApiData />
  </StrictMode>,
)
