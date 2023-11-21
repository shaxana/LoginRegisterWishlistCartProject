import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import MyProducts from "./components/pages/MyProducts";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Wishlist from "./components/pages/Wishlist";
import Cart from "./components/pages/Cart";
import ProductTable from "./components/pages/ProductTable";
import './Module.css'
function App() {
  let [login, setLogin] = useState(true);
  let [cardproducts, setCardProducts] = useState(false);
  let [register, setRegister] = useState([]);
  let [users, setUser] = useState([]);
  let [fav, setFav] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("https://65561a2084b36e3a431f0b20.mockapi.io/users")
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <ChakraProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login setLogin={setLogin} setCardProducts={setCardProducts} />} />
              <Route
                path="MyProducts"
                element={
                  login ? (
                    <MyProducts fav={fav} setFav={setFav} cart={cart} setCart={setCart} login={login} setLogin={setLogin} />
                  ) : (
                    <Login setLogin={setLogin} login={login} setCardProducts={setCardProducts} />
                  )
                }
              />
              <Route path="Cart" element={<Cart cart={cart} setCart={setCart} />} />
              <Route
                path="Wishlist"
                element={<Wishlist fav={fav} setFav={setFav} />}
              />
              <Route path="Register" element={<Register />} />
              <Route path="ProductTable" element={<ProductTable />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </ChakraProvider>
  );
}

export default App;
