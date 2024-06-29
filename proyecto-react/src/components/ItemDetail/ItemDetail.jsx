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

const ItemDetail = (nombre , img , descripcion , precio , stock) => {
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
          <Text color="black" fontSize="35px" fontFamily='"Oswald", sans-serif'>
            ${descripcion}
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
            colorScheme="black"
            fontFamily='"Oswald", sans-serif'
            fontSize="20px"
            border="1px"
          >
            Buy Now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail
