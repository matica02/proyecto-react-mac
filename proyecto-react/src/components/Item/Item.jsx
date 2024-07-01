import React from "react";
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
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ nombre, img, precio, id, stock }) => {
  return (
    <Card
      maxW="sm"
      marginBottom={"50px"}
      backgroundColor="transparent"
      border="1px"
    >
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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            backgroundColor="lightgreen"
            fontFamily='"Oswald", sans-serif'
            fontSize="20px"
          >
            Add to Cart
          </Button>
          <Button
            variant="ghost"
            _hover={{ backgroundColor: "pink" }}
            colorScheme="black"
            fontFamily='"Oswald", sans-serif'
            fontSize="20px"
            border="1px"
          >
            <Link to={`/producto/${id}`}>Details</Link>
          </Button>
        </ButtonGroup>
        <ItemCount initialValue={1} stock={stock} />
      </CardFooter>
    </Card>
  );
};

export default Item;
