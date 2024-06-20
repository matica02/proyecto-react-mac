import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((prod) => setProductos(prod))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Flex
      className={"main"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <h1>{title}</h1>
      <ItemList productos={productos} />
    </Flex>
  );
};

export default ItemListContainer;
