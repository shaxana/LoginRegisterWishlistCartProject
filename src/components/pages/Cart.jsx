import React from 'react'
import { useEffect,useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter,Stack, Heading, Divider,Button, Image, Text, Grid} from '@chakra-ui/react'

function Cart({cart,setCart}) {
  if(!cart.length){
    return <h2>Your cart is empty!</h2>
  }
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
          {cart.map((product) => (
            <Box key={product.id} maxW="500px" w="100%" mb={4}>
              <Card>
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
               <Button data-id={product.id} onClick={(e)=>{
               let deletecheck = cart.includes(e.target.getAttribute('data-id'))
               
                let deleted = cart.find((cart) => cart != e.target.getAttribute("data-id"))
               
               setCart(deleted)
               console.log(deleted);
               }}> Remove</Button>
              </Card>
            </Box>
          ))}
        </Grid>
      </Container>
  </>
  )
}

export default Cart