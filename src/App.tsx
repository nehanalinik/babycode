import { AllRoutes } from './constants/routes'
import './sass/style.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(AllRoutes)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
