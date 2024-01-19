import React, { useEffect, useState, useContext } from 'react';
import Home from './comps/home/Home';
import Quote from './comps/quote/Quote';
import Restaurants from './comps/restaurants/Restaurants';
import Foods from './comps/foods/Foods';
import Contact from './comps/contact/Contact';
import Layout from './comps/Layout';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Details from './comps/foods/Details';
import FoodProvider from './context/FoodContext';

function App() {

  const [foodsData, setFoodsData] = useState([]);

  // useEffect(() => {
  //   window.scrollTo(0,0);
  // })
  
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:"/quotes",
          element: <Quote />
        },
        {
          path: "/restaurants",
          element: <Restaurants />
        },
        {
          path: "/foods",
          element: <Foods/>
        },
        {
          path: "/foods/:foodID",
          element: <Details/>
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
  ])


  return (
    <FoodProvider.Provider value={{ foodsData, setFoodsData }}>
       <RouterProvider router={router} />
    </FoodProvider.Provider>
  );
}

export default App;
