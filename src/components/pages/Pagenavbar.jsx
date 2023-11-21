import React from "react";
import { Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeart } from '@fortawesome/free-solid-svg-icons'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'
  import './../../Module.css'
function Pagenavbar() {
  return (
    <Container>
      <Row>
        <div className="navbar">
          <ul className="navigationList"> 
            <li> <a href="./Login" >Log In</a></li>
            <li><a href="./Register" >Register</a></li>
            <li><a href="./MyProducts" >My Products</a></li>
            <li><a href="./Wishlist" > Wishlist</a></li>
            <li><a href="./Cart" > Cart</a></li>
            <li> <a href="./ProductTable" > Product Table</a></li>

          </ul>
          <div className="searchInput">
            <form>
              <label><FontAwesomeIcon icon={faSearch} /></label>
              <input  placeholder=" search product" type="text"/>
            </form>
          </div>
          <div className="buttons">
            <div className="favicon"><FontAwesomeIcon icon={faHeart} /> <sup>0</sup></div>
            <div className="carticon"><FontAwesomeIcon icon={faCartShopping} /> <sup>0</sup></div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Pagenavbar;
