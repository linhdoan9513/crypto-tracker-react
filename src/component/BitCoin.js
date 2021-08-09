import React from "react";

class BitCoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPrice: this.props.coin,
      color: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.coin !== this.props.coin) {
      this.setState({
        prevPrice: prevProps.coin,
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
    if (this.props.coin > prevPrice) {
      return (
        <h3 className={`${this.state.color ? "green" : ""}`}>
          {this.props.coin.toLocaleString()}
        </h3>
      );
    } else {
      return (
        <h3 className={`${this.state.color ? "red" : ""}`}>
          {this.props.coin.toLocaleString()}
        </h3>
      );
    }
  }
}

export default BitCoin;
