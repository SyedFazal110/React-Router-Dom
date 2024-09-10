import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import layout from './layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Service from './pages/service.jsx'
import Singlestudent from './pages/singlestudent.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : layout,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "service",
        element : <Service/>
      },
      {
        path : "singlestudent",
        element : <Singlestudent/>
      },
      {
        path : "*",
        element : <h1>Not Found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)

