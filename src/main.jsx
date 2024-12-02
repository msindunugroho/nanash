import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-2xl text-slate-700'>test</h1>
  </StrictMode>,
)
