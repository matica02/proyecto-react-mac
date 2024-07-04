import React, { useContext } from 'react'
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
    Button,
  } from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { IoIosRemoveCircle } from "react-icons/io";

const Cart = () => {
    const {cart , getTotalPrice , removeItem , clearCart} = useContext(Context)
  return (
    <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            <Thead>
                <Tr>
                    <Th>Product</Th>
                    <Th>Quantity</Th>
                    <Th>Precio</Th>
                    <Th>Subtotal</Th>
                    <Th></Th>
                </Tr>
            </Thead>
                <Tbody>
                    {
                        cart.map((prod) => (
                            <Tr>
                                <Td>{prod.nombre}</Td>
                                <Td>{prod.quantity}</Td>
                                <Td>{prod.precio}</Td>
                                <Td>{prod.precio * prod.quantity}</Td>
                                <Td>{<Button onClick={() => removeItem(prod.id)}><IoIosRemoveCircle /></Button>}</Td>
                            </Tr>
                    ))}    
            </Tbody>
        </Table>
    </TableContainer>
  )
}

export default Cart
