import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Divider,
  Image,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import Context from "../../context/CartContext";

const ItemDetail = ({ id, nombre, img, descripcion, precio, stock }) => {
  const {addItem} = useContext(Context)
  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio
    }
    addItem(item , quantity)
      toast(`Agregaste ${quantity} productos`);
  };

  return (
    <Card maxW="xlg" backgroundColor="transparent" border="1px" margin={"50px"}>
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
          <Text color="black" fontSize="35px" fontFamily='"Oswald", sans-serif'>
            ${precio}
          </Text>
          <Text color="black" fontSize="25px" fontFamily='"Oswald", sans-serif'>
            {descripcion}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
      </CardFooter>
      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;
