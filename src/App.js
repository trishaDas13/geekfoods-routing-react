import Home from './comps/home/Home';
import Quote from './comps/quote/Quote';
import Restaurants from './comps/restaurants/Restaurants';
import Foods from './comps/foods/Foods';
import Contact from './comps/contact/Contact';
import Layout from './comps/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from './comps/foods/Details'

function App(mealData) {

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
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
