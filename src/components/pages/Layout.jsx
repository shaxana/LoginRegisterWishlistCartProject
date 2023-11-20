import React from 'react'
import Login from './Login';

import { Link,Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/MyProducts">MyProducts</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        <li>
          <Link to="/ProductTable">ProductTable</Link>
        </li>
      </ul>
    </nav>
   <Outlet/>
    </>
  )
}

export default Layout