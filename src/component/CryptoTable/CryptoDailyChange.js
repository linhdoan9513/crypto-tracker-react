import React from 'react'; 

const CryptoDailyChange = ({coin}) => {
   if (coin.price_change_percentage_24h > 0 ) { 
       return <td className="align-center green">{coin.price_change_percentage_24h.toFixed(2)} %</td>
   }
    return <td className="align-center red">{coin.price_change_percentage_24h.toFixed(2)} %</td>
}

export default CryptoDailyChange;