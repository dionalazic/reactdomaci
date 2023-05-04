import React from 'react';
import {BsCartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';


function Meni({cartNum, isHome, isShop}) {
  return (
    <div className = {isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img">
        <img 
        src="https://ancikolaci.rs/wp-content/uploads/2020/09/logo.png"
        alt="slika logo"
        className={isHome ===1 ? "img" : "img-else"}
        />
      </Link>

      <div
        className={
          isHome===1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
        }
      >
        
       <Link
        to = "/prodavnica"
        className="menu-bar-items"
        style = {isShop===1 ? {fontStyle:"italic"} : {textDecorationLine:"underline"}}
        >
        Torte
       </Link>  
      </div>

      {isShop === 1 || isHome === 0 ? (
        <Link to = "/korpa" className='cart-items'>
          <BsCartFill className='icon-cart' />
          <p className='cart-num'>{cartNum}</p>
          
        </Link>
      ) : (
        <div className="menu-bar-text">
          <p>Za sladak svaki dan ili neki poseban</p>
          <div className='menu-bar-info'>
            <p>Kontakt: 064/267 72 76</p>
            <p>Radno vreme: Pon-Ned 07-22h</p>
            <p>Adresa: Lava Tolstoja 13a, Pančevo</p>
          </div>
        </div>
      )}

    </div>
    
  );
}

export default Meni
