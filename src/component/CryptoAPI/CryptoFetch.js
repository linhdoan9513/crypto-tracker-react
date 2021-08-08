import axios from "axios";
import React from "react";
import GlobalFetch from "./GlobalFetch";
import CryptoTable from "../CryptoTable/CryptoTable";

class CryptoFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: [],
    };
  }

  async getCrypto() {
    let response = await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d`
      )
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      data: response.data,
      fetchingData: false,
    });
  }

  componentDidMount() {
    this.getCrypto();
    this.interval = setInterval(() => this.getCrypto(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {!this.state.fetchingData ? (
          <GlobalFetch data={this.state.data[0].current_price} />
        ) : null}
        {!this.state.fetchingData ? (
          <CryptoTable data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default CryptoFetch;
