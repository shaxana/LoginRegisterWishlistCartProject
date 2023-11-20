import React from "react";
import { Container, Row } from "react-bootstrap";

function Pagenavbar() {
  return (
    <Container>
      <Row>
        <div className="navbar">
          <ul>
            <li></li>
            <li></li>
          </ul>
          <div className="searchInput">
            <FormControl>
              <FormLabel>Search</FormLabel>
              <Input placeholder="search product" type="text"/>
            </FormControl>
          </div>
          <div className="buttons">
            <div className="favicon">favorite <sup>0</sup></div>
            <div className="carticon">Cart <sup>0</sup></div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Pagenavbar;
