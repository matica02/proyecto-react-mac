import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Flex
        justify={"space-between"}
        align={"center"}
        height={"120px"}
        width={"100%"}
        paddingTop={"80px"}
        paddingBottom={"80px"}
      >
        <Menu>
          <MenuButton
            padding="30px 10px 30px 2px"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "lightBlue" }}
            as={Button}
            rightIcon={<RxHamburgerMenu fontSize="40px" />}
            margin={"50px"}
          ></MenuButton>
          <MenuList
            border="1px"
            backgroundColor="blanchedalmond"
            fontFamily='"Oswald", sans-serif'
            fontSize="30px"
          >
            <MenuItem backgroundColor="blanchedalmond"><Link to='/'>HOME</Link></MenuItem>
            <MenuItem backgroundColor="blanchedalmond"><Link to='categorias/VolkswagenGroup'>Volkswagen Group</Link></MenuItem>
            <MenuItem backgroundColor="blanchedalmond"><Link to='categorias/Mercedes'>Mercedes</Link></MenuItem>
            <MenuItem backgroundColor="blanchedalmond"><Link to='categorias/BMW'>BMW</Link></MenuItem>
          </MenuList>
        </Menu>
        <Heading>
          <Link to='/'>
            <img
              width='350px'
              src="../img/golf-sinfondo.png"
              alt="This is an image of a Volkswagen Golf R">
            </img>
          </Link>
        </Heading>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
