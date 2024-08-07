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
import { RiDeleteBin7Fill } from "react-icons/ri";

const Cart = () => {
  const { cart, getTotalPrice, removeItem, clearCart } = useContext(Context);
  if (cart.length === 0) {
    return (
      <Flex
        fontFamily={"'Oswald', sans-serif"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        mt={10}
      >
        <Text margin={"20px"} fontSize={"20px"}>
          The cart is empty,
        </Text>
        <ChakraLink
          as={Link}
          to="/"
          textDecoration={"underline"}
          fontSize={"30px"}
        >
          See products
        </ChakraLink>
      </Flex>
    );
  } else {
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
                      _hover={{ backgroundColor: "transparent", color: "red" }}
                      backgroundColor={"transparent"}
                    >
                      <IoIosRemoveCircle fontSize={"30px"} />
                    </Button>
                  }
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justify={"space-between"} margin={"30px 60px 0px 0px"}>
          <Button
            onClick={() => clearCart()}
            _hover={{ backgroundColor: "transparent", color: "red" }}
            backgroundColor={"transparent"}
          >
            <RiDeleteBin7Fill fontSize={"40px"} />
          </Button>
          <Text>Total: ${getTotalPrice()}</Text>
          <Text textDecoration={"underline"} color={"green"}>
            <Link to={"/checkout"}>Proceed to payment</Link>
          </Text>
        </Flex>
      </TableContainer>
    );
  }
};

export default Cart;
