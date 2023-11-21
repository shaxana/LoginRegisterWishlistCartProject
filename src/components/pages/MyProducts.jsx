import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
  Grid,
  Container,
  Box,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { wrap } from "framer-motion";
import './../../Module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeart } from '@fortawesome/free-solid-svg-icons'


function MyProducts({ cardproducts, setCardProducts, fav, setFav, cart, setCart}) {
  const [products, setProducts] = useState([]);
  let [user, setUser] = useState([]);
  let [edit, setEdit] = useState([]);
  useEffect(() => {
    axios
      .get("https://65561a2084b36e3a431f0b20.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      });
      let favArr = []
      setFav(favArr)

      let cartArr = []
      setCart(cartArr)
  }, []);

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid templateColumns="repeat(3,1fr)" gap={5}>
          {products.map((product, index) => (
            <Box key={product.id} maxW="500px" w="100%" mb={4}>
              <Card>
              {product.sale ? <Button className="salebutton" variant="ghost" >
                      SALE
                    </Button> : null}
                <Image
                  w="100%"
                  h="200px"
                  src={product.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <CardBody>
                  <Heading size="md">{product.name}</Heading>
                  <Text>STOCK: {product.stockCount}</Text>
                  <Text color="blue.600" fontSize="2xl">
                   PRICE: {product.price}
                  </Text>
                
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button data-id={product.id} variant="ghost" colorScheme="blue" onClick={(e)=>{
                      let selectedCartproduct = ''
                      selectedCartproduct = products.find((product)=> product.id == e.target.getAttribute('data-id'))
                      setCart([...cart, selectedCartproduct])
                      console.log('cart:', cart);
                    }}>
                      Add to cart
                    </Button>
                    <Button  data-id={product.id} variant="ghost" colorScheme="blue" onClick={(e)=>{
                        let selectedProduct = ''
                        selectedProduct = products.find((product)=> product.id == e.target.getAttribute('data-id'))
                        let updatedFav= fav.filter((product)=> product.id == selectedProduct.id)
                     if(updatedFav.length>0){
                      
                      fav.splice(selectedProduct,1)
                      setFav(updatedFav)
                      console.log("removed favs:", updatedFav);
                      console.log("original fav", fav);
                     }
                     else{
                    
                      console.log('selected:', selectedProduct);
                      setFav([...fav, selectedProduct])
                      console.log(fav);
                     }
                    }}
                    >
                      Add to Favorite <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Box>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default MyProducts;
