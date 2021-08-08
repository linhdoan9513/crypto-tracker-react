import React from "react";
import CryptoChart from "./CryptoChart";
import CryptoDailyChange from "../CryptoTable/CryptoDailyChange";
import CryptoWeeklyChange from "../CryptoTable/CryptoWeeklyChange";
import CryptoCurrentPrice from "./CryptoCurrentPrice";
import WatchListButton from "./WatchListButton";

const CryptoItem = ({ coin, favorite }) => {
  return (
    <tr>
      <WatchListButton coin={coin} favorite={favorite} />
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="crypto-name">
          <img className="crypto-icon" src={coin.image} alt={coin.id} />
          <p>{coin.name}</p>
          <span className="crypto-symbol1">[{coin.symbol}]</span>
        </div>
      </td>
      <CryptoCurrentPrice coin={coin} />
      <CryptoDailyChange coin={coin} />
      <CryptoWeeklyChange coin={coin} />
      <td>$ {coin.market_cap.toLocaleString()}</td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>
        {coin.circulating_supply.toLocaleString()} {coin.symbol.toUpperCase()}
      </td>
      <td>
        <CryptoChart coin={coin} />
      </td>
    </tr>
  );
};

export default CryptoItem;
