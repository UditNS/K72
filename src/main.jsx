import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import MaskCursor from './MaskCursor.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <MaskCursor> */}
        <App />
      {/* </MaskCursor> */}
    </BrowserRouter>
  </StrictMode>,
)
