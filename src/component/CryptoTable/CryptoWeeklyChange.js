import React from 'react'; 

const CryptoWeeklyChange = ({coin}) => {
   if (coin.price_change_percentage_7d_in_currency > 0 ) { 
       return <td className="align-center green">{coin.price_change_percentage_7d_in_currency.toFixed(2)} %</td>
   }
    return <td className="align-center red">{coin.price_change_percentage_7d_in_currency.toFixed(2)} %</td>
}

export default CryptoWeeklyChange;