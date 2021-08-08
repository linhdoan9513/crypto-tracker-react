import React from "react";
import NewsFetch from "./component/NewsAPI/NewsFetch";
import CryptoFetch from "./component/CryptoAPI/CryptoFetch";

class App extends React.Component {
  render() {
    return (
      <div>
        <NewsFetch />
        <CryptoFetch />
      </div>
    );
  }
}
export default App;
