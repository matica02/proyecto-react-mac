import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Context from "../../context/CartContext";
import { IoIosRemoveCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotalPrice, removeItem, clearCart } = useContext(Context);

  /* falta el if para no mostrar el carrito cuando (lenght === 0) */

  return (
    <TableContainer
      fontFamily={'"Oswald", sans-serif'}
      fontSize={"25px"}
      padding={"60px 50px 0px 60px"}
    >
      <Table variant="striped" colorScheme="pink">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Subtotal</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((prod) => (
            <Tr key={prod.id}>
              <Td>{prod.nombre}</Td>
              <Td>{prod.quantity}</Td>
              <Td>${prod.precio}</Td>
              <Td>${prod.precio * prod.quantity}</Td>
              <Td>
                {
                  <Button
                    onClick={() => removeItem(prod.id)}
                    _hover={{ backgroundColor: "transparent" }}
                    backgroundColor={"transparent"}
                  >
                    <IoIosRemoveCircle fontSize={"40px"} />
                  </Button>
                }
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify={"space-between"} margin={"30px 60px 0px 0px"}>
        <Button
          border={"1px"}
          _hover={{ backgroundColor: "red" }}
          backgroundColor={"transparent"}
          onClick={() => clearCart()}
        >
          Clear Cart
        </Button>
        <Text>Total: ${getTotalPrice()}</Text>
        <Text textDecoration={"underline"} color={"green"}>
          Proceed to payment
        </Text>
      </Flex>
    </TableContainer>
  );
};

export default Cart;
