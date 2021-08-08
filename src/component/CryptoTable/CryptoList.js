import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = (props) => {
  const renderedList = props.data.map((coin) => {
    return <CryptoItem key={coin.id} coin={coin} favorite={props.favorite} />;
  });

  return (
    <div>
      <table className="crypto-table">
        <tbody>
          <tr>
            <th></th>
            <th>#</th>
            <th className="align-left">Name</th>
            <th className="align-left">Price</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>
              Market Cap <span className="yellow">&#x25BC;</span>
            </th>
            <th>
              Volume(24h) <span className="yellow">&#x25BC;</span>
            </th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
            <th></th>
          </tr>
          {renderedList}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
