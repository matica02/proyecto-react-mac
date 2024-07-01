import useCounter from "../hooks/useCounter";
import { Button } from "@chakra-ui/react";

const ItemCount = ({ initialValue, stock }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

  return (
    <div>
      <Button
        _hover={{ backgroundColor: "transparent" }}
        paddingBottom={"7px"}
        fontSize={"30px"}
        backgroundColor={"transparent"}
        onClick={decrementar}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        _hover={{ backgroundColor: "transparent" }}
        fontSize={"30px"}
        backgroundColor={"transparent"}
        onClick={incrementar}
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
