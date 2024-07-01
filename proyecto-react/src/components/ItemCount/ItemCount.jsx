import useCounter from "../hooks/useCounter";
import { Button, Flex, Text } from "@chakra-ui/react";

const ItemCount = ({ initialValue, stock }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

  return (
    <Flex>
      <Button
        _hover={{ backgroundColor: "transparent" }}
        fontSize={"30px"}
        backgroundColor={"transparent"}
        onClick={decrementar}
      >
        -
      </Button>
      <Text fontFamily={'"Oswald", sans-serif'} fontSize={"25px"} fontWeight={'bold'}>
        {count}
      </Text>
      <Button
        _hover={{ backgroundColor: "transparent" }}
        fontSize={"30px"}
        backgroundColor={"transparent"}
        onClick={incrementar}
      >
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;
