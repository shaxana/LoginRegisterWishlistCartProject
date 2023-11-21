import React from 'react'
import Login from './Login';
import { Container } from '@chakra-ui/react';
import { Row } from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeart } from '@fortawesome/free-solid-svg-icons'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './../../Module.css'

function Layout() {
  return (
    <>
    {/* <nav>
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
      
    </nav> */}
     
          <div className="navbar">
            <Container className='nav'>
        <Row>
            <ul className="navigationList">
              <li>
                <Link to="/">Log In</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/MyProducts">My Products</Link>
              </li>
              <li>
                <Link to="/Wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>
              <li>
                <Link to="/ProductTable">Product Table</Link>
              </li>
            </ul>
            <div className="searchInput">
              <form>
                <label>
                  <FontAwesomeIcon icon={faSearch} />
                </label>
                <input placeholder=" search product" type="text" />
              </form>
            </div>
            <div className="buttons">
              <div className="favicon">
                <FontAwesomeIcon icon={faHeart} /> <sup>0</sup>
              </div>
              <div className="carticon">
                <FontAwesomeIcon icon={faCartShopping} /> <sup>0</sup>
              </div>
            </div>
            </Row>
      </Container>
          </div>
        
   <Outlet/>
    </>
  )
}

export default Layout