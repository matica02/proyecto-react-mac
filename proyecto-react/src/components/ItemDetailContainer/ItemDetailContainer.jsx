import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import { Box } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    useEffect(() => {
        getProductById(productId)
            .then((data) => setProduct(data))
            .catch((error) => console.log(error))
    }, [])
  return (
    <Box>
        <ItemDetail {...product} />
    </Box>
  )
}

export default ItemDetailContainer
