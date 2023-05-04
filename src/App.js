import './App.css';
import Meni from './components/Meni';
import Prodavnica from './components/Prodavnica';
import Korpa from "./components/Korpa";
import { useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [torte] = useState([
    {
      id: 1,
      title: "Oskar Višnja",
      url:"https://www.stamevski.com/wp-content/uploads/2018/11/Oskar-torta-1-768x768.jpg",
      description:
        "Četiri sočne čoko kore, fil sa višnjama, čoko i vanil krem, čoko glazura ili miror višnja odozgo. Težina torte	1kg. Oblik torte: krug.",
      price: 2000,
      amount: 0,
    },
    {
      id: 2,
      title: "Aronija Badem",
      url: "https://www.stamevski.com/wp-content/uploads/2018/10/Aronija-badem-torta-768x768.jpg",
      description:
        "Krem od aronije na bazi sojinog mleka, preliven crnom čokoladom i ukrašen kandiranom aronijom, na hrskavoj kori od badema, oraha, meda i kokosovog mleka. Težina torte	2kg. Oblik torte: krug.",
      price: 3000,
      amount: 0,
    },
    {
      id: 3,
      title: "Jaffa Torta",
      url: "https://www.stamevski.com/wp-content/uploads/2018/10/Jafa-torta-768x768.jpg",
      description:
        "Dva slatka čokoladna krema i lagane kore, sa osvežavajućim filom od pomorandže i kandiranim voćnihm mrvicama. Težina torte	1kg. Oblik torte: krug.",
      price: 3000,
      amount: 0,
    },
    {
      id: 4,
      title: "Nugat Choco",
      url: "https://www.stamevski.com/wp-content/uploads/2018/10/Nugat-torta-2-768x768.jpg",
      description:
        "Beli vanila krem i mlečni nugat, pažljivo spojeni na čokoladnoj kori, obogačeni nežnim prelivom od mlečne čokolade i hrskavim lešnikom. Težina torte	1kg. Oblik torte: krug/pravougaonik.",
      price: 2500,
      amount: 0,
    },
    {
      id: 5,
      title: "Posna Višnja Nugat",
      url: "https://www.stamevski.com/wp-content/uploads/2018/10/Posna-vi%C5%A1nja-torta-2.jpg",
      description:
        "Posni čokoladni kolač sa čokoladnim  filom, osvežvajućim ukusom višanja i vazdušastim čokoladnim korama. Težina torte	1kg. Oblik torte: krug/pravougaonik.",
      price: 2000,
      amount: 0,
    },
    {
      id: 6,
      title: "Plazma Choco Cream",
      url: "https://www.stamevski.com/wp-content/uploads/2019/01/Plazma-torta-2-768x768.jpg",
      description:
        "Hrskava plazma i čokoladni krem, jednostavna a opet savršena slatka kombinacija. Težina torte	2kg. Oblik torte: krug/pravougaonik.",
      price: 2500,
      amount: 0,
    },
    {
      id: 7,
      title: "Esterhazi",
      url: "https://www.stamevski.com/wp-content/uploads/2018/11/Esterhazi-torta-1-768x768.jpg",
      description:
        "Sa lešnik korama i filom, “Ester” je idealan zimski kolač za sve ljubitelje lešnika. Težina torte	2kg. Oblik torte: krug/pravougaonik.",
      price: 2000,
      amount: 0,
    },
    {
      id: 8,
      title: "Doboš Čokoladna",
      url: "https://www.stamevski.com/wp-content/uploads/2018/10/Dobo%C5%A1-%C4%8Doko-torta-1-768x768.jpg",
      description:
        "Božanstvena torta mađarskog porekla koju je još 1884. g napravio tada poznati Jozsef C. Dobos. Pravimo je po originalnom receptu iz tog vremena, sa puno tankih vazdušastih kora, čokoladnim kremom. Kruna torte je čokoladna dekoracija.",
      price: 2500,
      amount: 0,
    },
    {
      id: 9,
      title: "Moskva",
      url: "https://www.stamevski.com/wp-content/uploads/2018/10/Moskva-torta-2-768x768.jpg",
      description:
        "Harmonija vanil fila, kore sa lešnicima i svežeg ukusa višanja, ananasa i breskve. Torta je dekorisana listićima badema i kandiranom kajsijom i papajom. Težina torte	2kg. Oblik torte: krug/pravougaonik.",
      price: 2500,
      amount: 0,
    },
  ]);

  function refreshKorpa(){
    let newProducts = torte.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }

  function addProduct(title, id){
    setCartNum(cartNum+1);
    torte.forEach((prod) => {
      if(prod.id === id){
        prod.amount++;
      }
      console.log(prod.amount);
    });
    refreshKorpa();
  }

  function removeProduct(title, id){
    torte.forEach((prod)=> {
      if(prod.id === id){
        if(prod.amount > 0){
          prod.amount--;
          setCartNum(cartNum-1);
        }
      }
    });
    refreshKorpa();
  }
  


  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/prodavnica"
          element={
            <>
              <Meni cartNum={cartNum} isHome={0} isShop={1} />,
              <Prodavnica
                torte={torte}
                onAdd={addProduct}
                onRemove={removeProduct}
              />
            </>
          }
        />
        <Route path="/" element={<Meni cartNum={cartNum} isHome={1} />} />
        <Route
          path="/korpa"
          element={
            <>
              <Meni cartNum={cartNum} isHome={0} />,
              <Korpa torte={cartProducts} onRemove={removeProduct} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
