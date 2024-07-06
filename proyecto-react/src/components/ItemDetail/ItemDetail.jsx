import React, { useContext, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  Link as ChakraLink,
  Flex
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, img, descripcion, precio, stock }) => {
  const [quantity, setQuantity] = useState(0)
  const {addItem} = useContext(Context)
  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio
    }
    setQuantity(quantity)
    addItem(item , quantity)
      toast(`Agregaste ${quantity} productos`);
  };

  return (
    <Card fontFamily={'"Oswald", sans-serif'} maxW="xlg" backgroundColor={"transparent"} border="1px" margin={"50px"}>
      <CardBody>
        <Image
          src={img}
          borderRadius="lg"
          w={"350px"}
          h={"350px"}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="lg" fontFamily='"Oswald", sans-serif'>
            {nombre}
          </Heading>
          <Text color="black" fontSize="35px">
            ${precio}
          </Text>
          <Text color="black" fontSize="25px">
            {descripcion}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {
          quantity === 0 ?
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
          :
          <Flex textDecoration={'underline'} fontSize={'30px'}>
            <ChakraLink as={Link} to='/cart'>Checkout</ChakraLink>
            <ChakraLink as={Link} to='/cart' marginLeft={'30px'}>Continue shopping</ChakraLink>
          </Flex>  
        }
      </CardFooter>
      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;
