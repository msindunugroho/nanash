import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import HomePage from './routes/home-page'
import './css/index.css'
import NavigationTemplatesPage from './routes/navigation-templates-page'
import NameDefault from './components/navigation-templates/_lab/Name-Default'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path:"/lab",
        element: <NameDefault />
      },
      {
        path: "/components/navigation-templates",
        element: <NavigationTemplatesPage />,
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
