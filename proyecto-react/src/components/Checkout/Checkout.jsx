import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Input,
  Heading,
  Button,
  FormHelperText
} from "@chakra-ui/react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import Swal from 'sweetalert2'

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  })
  const [ error , setError ] = useState({})

  const { cart, getTotalPrice } = useContext(Context)

  const updateUser = (event) => {
    setUser((user) => ({
        ...user,
        [event.target.name]: event.target.value
    }))
  }

  const validateForm = () => {
    const errors = {}
    if(!user.name) {
        errors.name = 'Obligatory field'
    }else if(user.name.length < 3 || user.name.length >= 15) {
        errors.name = '3 Words minimum, 15 maximum'
    }
    setError(errors)
    return Object.keys(error).lenght === 0
  }

  const getOrder = async () => {
    if(!validateForm()){
        return
    }

    const ordersCollection = collection(db, 'orders')
    try{
        const order = {
            buyer: user,
            cart: cart, 
            total: getTotalPrice(),
            Date: Timestamp.now()
        }
        const orderRef = await addDoc(ordersCollection, order)
        Swal.fire({
            title: 'Order Number:',
            text: orderRef.id,
            icon: 'success',
            confirmButtonText: 'Done'
          })
    } catch (error) {
        console.log(error)
    }
  }



  return (
    <Flex marginLeft={'65px'} direction={'column'} w={'50%'}>
        <Heading margin={'30px 0px 30px 0px'} fontFamily={"'Oswald', sans-serif"} fontSize={'4rem'}>Billing Details</Heading>
        <FormControl fontFamily={"'Oswald', sans-serif"}>
            <FormLabel fontSize={'25px'}>Name:</FormLabel>
            <Input type="text" name="name" onChange={updateUser} borderColor={'black'}/>
            <FormHelperText marginBottom={'15px'}>{error.name}</FormHelperText>
            <FormLabel fontSize={'25px'}>Email:</FormLabel>
            <Input type="email" name="email" onChange={updateUser} borderColor={'black'}/>
            <FormHelperText marginBottom={'15px'}></FormHelperText>
            <FormLabel fontSize={'25px'}>Confirm Email:</FormLabel>
            <Input type="email" name="repeatedEmail" onChange={updateUser} borderColor={'black'}/>
            <FormHelperText marginBottom={'15px'}></FormHelperText>
            <FormLabel fontSize={'25px'}>Phone:</FormLabel>
            <Input type="text" name="phone" onChange={updateUser} borderColor={'black'}/>
            <FormHelperText></FormHelperText>
            <Button 
                onClick={getOrder}
                variant="solid"
                backgroundColor="lightgreen"
                fontFamily='"Oswald", sans-serif'
                fontSize="20px"
                marginTop={'15px'}
            >
                Finish
            </Button>
        </FormControl>
    </Flex>
  );
};

export default Checkout;
