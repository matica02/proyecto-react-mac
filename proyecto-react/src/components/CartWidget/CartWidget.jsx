import React, { useContext } from "react";
import stylesCW from "./CartWidget.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Badge, Flex } from "@chakra-ui/react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(Context);
  return (
    <Flex className={stylesCW.cart}>
      <Link to="/cart" >
        <FiShoppingCart fontSize={"40px"}/>
      </Link>
      <Flex justify={"center"} align={"center"}>
        <Badge
          marginLeft={"10px"}
          fontSize={"20px"}
          fontFamily={'"Oswald", sans-serif'}
          backgroundColor={"transparent"}
        >
          ({getQuantity()})
        </Badge>
      </Flex>
    </Flex>
  );
};

export default CartWidget;
