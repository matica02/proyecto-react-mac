import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import stylesILC from "./ItemListContainer.module.css";
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
      className={stylesILC.main}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <h1 className={stylesILC.title}>{title}</h1>
      <ItemList productos={productos} />
    </Flex>
  );
};

export default ItemListContainer;
