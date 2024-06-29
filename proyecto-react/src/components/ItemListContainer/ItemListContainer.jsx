import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import stylesILC from "./ItemListContainer.module.css";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()
  useEffect(() => {
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProductos
      .then((prod) => setProductos(prod))
      .catch((error) => console.log(error));
  }, [categoryId]);

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
