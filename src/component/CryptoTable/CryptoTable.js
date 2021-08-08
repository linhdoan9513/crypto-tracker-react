import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CryptoList from "./CryptoList";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

const CryptoTable = (props) => {
  const [value, setValue] = React.useState(0);
  const [favoriteCoins, setFavoriteCoins] = React.useState({ ...localStorage });

  React.useEffect(() => {
    //listen for dispatchEvent
    window.addEventListener("storage", () => {
      //create a {} new object, ... unpack old object to create the new one
      //because React doesnt rerender
      setFavoriteCoins({ ...localStorage } || {});
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const watchList =
    Object.keys(favoriteCoins).length > 0
      ? Object.keys(favoriteCoins).map((coin) =>
          // same as favouriteCoins.getItem(coin)
          JSON.parse(favoriteCoins[coin])
        )
      : [];

  return (
    <div className="wrapper">
      <Tabs value={value} onChange={handleChange} aria-label="Cryto Table">
        <Tab label="Full List" value={0} />
        <Tab label="Watch List" value={1} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CryptoList data={props.data} favorite={false} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CryptoList data={watchList} favorite={true} />
      </TabPanel>
    </div>
  );
};

export default CryptoTable;
