import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer title={"Sports Cars Scale Models"} />}
            />
            <Route
              path="/categorias/:categoryId"
              element={<ItemListContainer title={"Sports Cars Scale Models"} />}
            />
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer title={"Sports Cars Scale Models"} />}
            />
            <Route 
              path='/cart' 
              element={<Cart />}
            />
            <Route 
              path="*" 
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
