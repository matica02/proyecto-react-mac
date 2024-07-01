import React from 'react'
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
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({nombre , img , descripcion , precio , stock}) => {
  return (
    <Card
      maxW="xlg"
      backgroundColor="transparent"
      border="1px"
      margin={"50px"}
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
          <Text color="black" fontSize="25px" fontFamily='"Oswald", sans-serif'>
            {descripcion}
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
            _hover={{ backgroundColor: "lightGreen" }}
            colorScheme="black"
            fontFamily='"Oswald", sans-serif'
            fontSize="20px"
            border="1px"
          >
            Buy Now
          </Button>
          <Button 
            variant="ghost"
            colorScheme="black"
            fontFamily='"Oswald", sans-serif'
            fontSize="20px"
          >
            <ItemCount initialValue={1} stock={stock}/>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail
