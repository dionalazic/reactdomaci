import React from 'react';
import Proizvod from './Proizvod';

function Korpa({ torte, onRemove }) {
    let ukupno = 0;
  return (
    <>
       <div className="all-products">
        {torte.map((prod) => (
            (ukupno += prod.price * prod.amount),
            (
                <Proizvod
                    product = {prod}
                    key = {prod.id}
                    inCart = {1}
                    onRemove = {onRemove}
                />
            )
        ))}
       </div>

       {ukupno === 0 ? (
        <></>
       ) : (
        <>
            <div className='div-order'>
                <h2 className='txt-your-order'>Vasa porudzbina</h2>
                <table className='table-order'>
                    <tr>
                        <th>Proizvod</th>
                        <th>Kolicina</th>
                        <th>Cena</th>
                    </tr>
                    {torte.map((prod) => (
                        <>
                        <tr>
                            <td>{prod.title}</td>
                            <td>{prod.amount}</td>
                            <td>{prod.price} RSD</td>
                        </tr>
                        </>
                    ))}
                </table>
                <h3 className='txt-total'>Ukupno: {ukupno} RSD</h3>
            </div>
        </>
       )}

    </>
  );
}

export default Korpa
