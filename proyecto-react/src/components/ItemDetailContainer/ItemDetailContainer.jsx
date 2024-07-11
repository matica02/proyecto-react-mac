import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { BarLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const queryRef = doc(db , 'productos' , productId)
      const response = await getDoc(queryRef)

      const newItem = {
        ...response.data(),
        id: response.id
      }
      setProduct(newItem)
      setLoading(false)
    }
    getData()
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
