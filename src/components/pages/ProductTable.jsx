import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, FormControl } from '@chakra-ui/react'
import Register from './Register'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useFocusEffect,
  } from '@chakra-ui/react'
import { color } from 'framer-motion'
import { Form, json } from 'react-router-dom'

function ProductTable({tableproducts, setTableproducts}) {
  let [user, setUser] = useState([])
  let [products, setProduct] = useState([])
  let [isAdmin, setIsAdmin] = useState(false)
  let [fav, setFav] = useState([])
  let [edit, setEdit] = useState([])
  
  useEffect(()=>{
      axios.get ("https://65561a2084b36e3a431f0b20.mockapi.io/products").then((res)=>{
          setProduct(res.data)
         
      })

      let favArr = []
      // favArr = [...JSON.parse(localStorage.getItem("favorites"))]
      setFav(favArr)




  },[])

console.log(fav)

  return (
    <>
    <TableContainer>
    <Table variant='simple'>
      <TableCaption>Products</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>price</Th>
          <Th>stockCount</Th>
          <Th>sale </Th>
        </Tr>
      </Thead> 
      <Tbody>
    {products.map((product)=>(
        <Tr  key={product.id} style={
          {color: product.sale ? 'green': product.stockCount < 10 ? 'red' : 'black'
          }
        }>
          <Td>{product.id}</Td>
          <Td>{product.name}</Td>
          <Td>{product.price}</Td>
          <Td>{product.stockCount}</Td>
          <Td>{product.sale ? 'yes' :'no'}</Td>
          <Td> <Button colorScheme='teal' size='md' >
  Add Product
</Button></Td>

<Td > <button data-id={product.id} onClick={(e)=>{
 
  let selectedProduct = ""
  selectedProduct = products.find((product) => product.id == e.target.getAttribute("data-id"))

setFav([...fav,selectedProduct])



}}>Favorite</button></Td>
<Td><Button onClick={()=>{
  setEdit(product)
}}>Edit</Button></Td>
<Td><Button>Delete</Button></Td>
{/* {edit ? <Form onSubmit={(e)=>{
          e.preventDefault();
          axios.patch(`https://65561a2084b36e3a431f0b20.mockapi.io/products/${product.id}`, edit)
          let updatedProducts = products.find((x) => x.id == products.id)
          updatedProducts.name = edit.name;
          updatedProducts.price = edit.price;
          updatedProducts.sale = edit.sale;
          setTableproducts([...products])
          setEdit(null)

        }}>
          
            <input type="text"  onChange={(e)=>{
            setEdit({...edit, name: e.target.value}) }} value={edit.name} />
          <input type="number"  value={edit.price}  onChange={(e)=>{
            setEdit({...edit, price: e.target.value})
          }}/>
          <input type="number"   value={edit.stockCount} onChange={(e)=>{
            setEdit({...edit, stockCount: e.target.value})
          }}/>
          <input type="text"value={edit.sale} onChange={(e)=>{
            setEdit({...edit, sale: e.target.value})
          }}/> 
          
         
        </Form> : null} */}
        </Tr>
     
      ))}
     
     
  </Tbody>
    </Table>
  </TableContainer>



  
    </>


  )
}

export default ProductTable