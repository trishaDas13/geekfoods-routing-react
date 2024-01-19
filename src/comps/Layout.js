import React, {useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';


function Layout() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [useLocation().pathname])

  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout;