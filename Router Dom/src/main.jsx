import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Service from './pages/service.jsx'
import Layout from './layout.jsx'
import SingleProduct from './pages/singleproduct.jsx'



const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
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
        path : "singleproduct/:id",
        element : <SingleProduct/>
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

