import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import stylesILC from "./ItemListContainer.module.css";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const dataProductos = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();
    dataProductos
      .then((prod) => setProductos(prod))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <Flex
      className={stylesILC.main}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <h1 className={stylesILC.title}>{title}</h1>
      {loading ? <BarLoader /> : <ItemList productos={productos} />}
    </Flex>
  );
};

export default ItemListContainer;
