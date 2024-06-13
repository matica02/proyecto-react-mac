import React from "react";
import './NavBar.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <Flex justify={'space-between'} align={'center'} height={'120px'} width={'100%'} paddingTop={'80px'} paddingBottom={'80px'}>
        <Menu>
          <MenuButton padding='30px 10px 30px 4px' backgroundColor="transparent" _hover={{ backgroundColor: 'orange' }} as={Button} rightIcon={<RxHamburgerMenu fontSize='40px'/>} margin={'50px'}></MenuButton>
          <MenuList border='1px' backgroundColor='blanchedalmond' fontFamily='"Oswald", sans-serif' fontSize='30px'>
            <MenuItem backgroundColor='blanchedalmond'>Volkswagen</MenuItem>
            <MenuItem backgroundColor='blanchedalmond'>Mercedes</MenuItem>
            <MenuItem backgroundColor='blanchedalmond'>BMW</MenuItem>
            <MenuItem backgroundColor='blanchedalmond'>Audi</MenuItem>
            <MenuItem backgroundColor='blanchedalmond'>Porsche</MenuItem>
          </MenuList>
        </Menu>
        <Heading><img className="golf-sinfondo" src="../img/golf-sinfondo.png" alt="This is an image of a Volkswagen Golf R"></img></Heading>
        <CartWidget/>
      </Flex>
    </>
  );
};

export default NavBar;