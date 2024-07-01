import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import { Box, Flex } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BarLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      paddingTop={"50px"}
    >
      {loading ? <BarLoader /> : <ItemDetail {...product} />}
    </Flex>
  );
};

export default ItemDetailContainer;
