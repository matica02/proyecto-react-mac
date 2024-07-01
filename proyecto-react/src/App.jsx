import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title={'Sports Cars Scale Models'}/>} />
          <Route path='/categorias/:categoryId' element={<ItemListContainer title={'Sports Cars Scale Models'}/>} />
          <Route path='/producto/:productId' element={<ItemDetailContainer title={'Sports Cars Scale Models'}/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
