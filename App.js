import ReactDOM from 'react-dom';
import React from 'react'   
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Detail from './components/Detail';
import About from './components/About';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Cart from './components/Cart';



const App = () =>{
   return(
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
   )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:  <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path:'/about',
                element: <About />,
            },
            {
                path: "/products/:id",
                element:<Detail />,
            },
            {
                path: '/cart',
                element: <Cart />,
            }
        ],
    }, 

])

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />)
root.render(<RouterProvider router= {appRouter}/>);