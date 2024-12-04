import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import './css/index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: "",
    children: [
      {
        path: "",
        element: "",
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
