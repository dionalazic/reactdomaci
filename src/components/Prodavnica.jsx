import React from 'react';
import Proizvod from "./Proizvod";

function Prodavnica({torte, onAdd, onRemove}) {
  return (
    
    <div className ="all-products">
        {torte.map((prod) => (
          <Proizvod
            product = {prod}
            key={prod.id}
            onAdd={onAdd}
            onRemove={onRemove}
            inCart={0}
        />
      ))}
    </div>
    
  );
}

export default Prodavnica
