import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import stylesILC from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  console.log(db)
  useEffect(() => {
    setLoading(true)
    const getData = async() => {
      const coleccion = collection(db , 'productos')
      const queryRef = !categoryId ?
      coleccion : query(coleccion, where('categoria' , '==' , categoryId))
      const response = await getDocs(queryRef)
      const products = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProductos(products)
      setLoading(false)
    }
    getData()
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
