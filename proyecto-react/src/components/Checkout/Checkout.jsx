import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Input,
  Heading,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { addDoc, collection, getDoc, Timestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  })

  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const [error, setError] = useState({})

  const { cart, getTotalPrice, clearCart } = useContext(Context)

  const navigate = useNavigate()

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value
    }))
  }

  const updateCard = (event) => {
    setCard((card) => ({
      ...card,
      [event.target.name]: event.target.value,
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!user.name) {
      errors.name = "Obligatory field"
    } else if (user.name.length < 3 || user.name.length >= 20) {
      errors.name = "Name must be 3 words minimum, 20 maximum"
    }
    if (!user.email) {
      errors.email = "Obligatory field"
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is not valid"
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = "Obligatory field"
    } else if (user.repeatedEmail != user.email) {
      errors.repeatedEmail = "Not exactly the same Email"
    }
    if (!user.phone) {
      errors.phone = "Obligatory field"
    } else if (!/^\d{10}$/.test(user.phone)) {
      errors.phone = "Phone number must be 10 digits long"
    }
    if (!card.cardNumber) {
      errors.cardNumber = "Obligatory field";
    } else if (!/^\d{16}$/.test(card.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits long"
    }
    if (!card.cardName) {
      errors.cardName = "Obligatory field"
    }
    if (!card.expiryDate) {
      errors.expiryDate = "Obligatory field";
    } else {
      const [month, year] = card.expiryDate.split("/");
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1
      const currentYear = currentDate.getFullYear() % 100
      if (
        !/^\d{2}\/\d{2}$/.test(card.expiryDate) ||
        +month < 1 ||
        +month > 12 ||
        +year === 0 ||
        (+year < currentYear || (+year === currentYear && +month < currentMonth))
      ) {
        errors.expiryDate =
          "Expiry date must be valid, in MM/YY format, and not in the past";
      }
    }
    if (!card.cvv) {
      errors.cvv = "Obligatory field"
    } else if (!/^\d{3}$/.test(card.cvv)) {
      errors.cvv = "CVV must be 3 digits long"
    }
    setError(errors)
    return Object.keys(errors).length === 0
  }

  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }
    if (cart.length === 0) {
      toast("No products in cart");
      return;
    }
    const ordersCollection = collection(db, "orders")
    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotalPrice(),
        Date: Timestamp.now(),
        card: {
          cardNumber: card.cardNumber,
          cardName: card.cardName,
          expiryDate: card.expiryDate,
          cvv: card.cvv,
        }
      }

      for(const item of cart){
        const productRef = doc(db, 'productos', item.id)
        const productDoc = await getDoc(productRef)
        const currentStock = productDoc.data().stock

        await updateDoc(productRef, {
          stock: currentStock - item.quantity
        })
      }
      const orderRef = await addDoc(ordersCollection, order)
      clearCart()
      Swal.fire({
        title: "Order Number:",
        text: orderRef.id,
        icon: "success",
        confirmButtonText: "Done",
      }).then(() => {
        navigate("/")
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex marginLeft={"65px"} direction={"column"} w={"50%"}>
      <Heading
        margin={"30px 0px 30px 0px"}
        fontFamily={"'Oswald', sans-serif"}
        fontSize={"4rem"}
      >
        Billing Details
      </Heading>
      <FormControl fontFamily={"'Oswald', sans-serif"}>
        <FormLabel fontSize={"25px"}>Name:</FormLabel>
        <Input
          type="text"
          name="name"
          onChange={updateUser}
          borderColor={"black"}
        />
        <FormHelperText marginBottom={"15px"}>{error.name}</FormHelperText>
        <FormLabel fontSize={"25px"}>Email:</FormLabel>
        <Input
          type="email"
          name="email"
          onChange={updateUser}
          borderColor={"black"}
        />
        <FormHelperText marginBottom={"15px"}>{error.email}</FormHelperText>
        <FormLabel fontSize={"25px"}>Confirm Email:</FormLabel>
        <Input
          type="email"
          name="repeatedEmail"
          onChange={updateUser}
          borderColor={"black"}
        />
        <FormHelperText marginBottom={"15px"}>
          {error.repeatedEmail}
        </FormHelperText>
        <FormLabel fontSize={"25px"}>Phone:</FormLabel>
        <Input
          type="text"
          name="phone"
          onChange={updateUser}
          borderColor={"black"}
        />
        <FormHelperText>{error.phone}</FormHelperText>
        <Heading
          margin={"30px 0px 30px 0px"}
          fontFamily={"'Oswald', sans-serif"}
          fontSize={"4rem"}
        >
          Payment Details
        </Heading>
        <FormLabel fontSize={"25px"}>Card Number:</FormLabel>
        <Input
          type="text"
          name="cardNumber"
          onChange={updateCard}
          borderColor={"black"}
        />
        <FormHelperText marginBottom={"15px"}>
          {error.cardNumber}
        </FormHelperText>
        <FormLabel fontSize={"25px"}>Name on Card:</FormLabel>
        <Input
          type="text"
          name="cardName"
          onChange={updateCard}
          borderColor={"black"}
        />
        <FormHelperText marginBottom={"15px"}>{error.cardName}</FormHelperText>
        <FormLabel fontSize={"25px"}>Expiry Date (MM/YY):</FormLabel>
        <Input
          type="text"
          name="expiryDate"
          onChange={updateCard}
          borderColor={"black"}
        />
        <FormHelperText marginBottom={"15px"}>
          {error.expiryDate}
        </FormHelperText>
        <FormLabel fontSize={"25px"}>CVV:</FormLabel>
        <Input
          type="text"
          name="cvv"
          onChange={updateCard}
          borderColor={"black"}
        />
        <FormHelperText>{error.cvv}</FormHelperText>
        <Button
          onClick={getOrder}
          variant="solid"
          backgroundColor="lightgreen"
          fontFamily='"Oswald", sans-serif'
          fontSize="30px"
          margin={"15px 0px 30px 0px"}
          padding={"30px"}
        >
          Finish
        </Button>
      </FormControl>
      <ToastContainer />
    </Flex>
  );
};

export default Checkout;
