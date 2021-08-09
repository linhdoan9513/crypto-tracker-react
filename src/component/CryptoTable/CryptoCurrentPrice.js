import React from "react";

class CryptoCurrentPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPrice: this.props.coin.current_price,
      color: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.coin.current_price !== this.props.coin.current_price) {
      this.setState({
        prevPrice: prevProps.coin.current_price,
        color: true,
      });
      setTimeout(() => {
        this.setState({ color: false });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.changeColor);
  }

  render() {
    const { prevPrice } = this.state;
    if (this.props.coin.current_price > prevPrice) {
      return (
        <td className={`align-left ${this.state.color ? "green" : ""}`}>
          $ {this.props.coin.current_price.toLocaleString()}
        </td>
      );
    } else {
      return (
        <td className={`align-left ${this.state.color ? "red" : ""}`}>
          {" "}
          $ {this.props.coin.current_price.toLocaleString()}
        </td>
      );
    }
  }
}

export default CryptoCurrentPrice;
