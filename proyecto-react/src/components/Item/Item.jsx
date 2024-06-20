import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text,Button, ButtonGroup, Divider, Image } from '@chakra-ui/react';

const Item = ({ nombre, img, precio }) => {
  return (
    <Card maxW="sm" marginBottom={'50px'} backgroundColor='transparent' border='1px'>
      <CardBody>
        <Image
          src={img}
          borderRadius="lg"
          w={"350px"}
          h={"350px"}
          objectFit={"cover"}
          _hover:width={'380px'}
        />
        <Stack mt="6" spacing="3">
          <Heading size="lg" fontFamily='"Oswald", sans-serif'>{nombre}</Heading>
          <Text color="black" fontSize="35px" fontFamily='"Oswald", sans-serif'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" backgroundColor='lightgreen' fontFamily='"Oswald", sans-serif' fontSize='20px'>
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="black" fontFamily='"Oswald", sans-serif' fontSize='20px' border='1px'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
