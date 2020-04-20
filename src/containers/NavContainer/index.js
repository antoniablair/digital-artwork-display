import React from "react";
import Nav from "../../components/Nav";

import { useLocation } from "react-router-dom";

/**
 * Hide navbar on certain paths. Todo: link up to react router
 */

 const NavContainer = () => {
   const location = useLocation();
   if (location.pathname && location.pathname.includes('slideshow')) {
     return null;
   }
   return (<><Nav /></>)
 }

export default NavContainer;