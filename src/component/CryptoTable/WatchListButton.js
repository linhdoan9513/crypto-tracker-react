import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import StarIcon from "@material-ui/icons/Star";

class WatchListButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: props.favorite,
    };
  }

  onButtonClick() {
    if (!this.state.star) {
      this.createItem();
    } else {
      this.deleteItem();
    }

    this.setState({ star: !this.state.star });
  }

  createItem() {
    localStorage.setItem(this.props.coin.id, JSON.stringify(this.props.coin));
    //Announce there is a new storage; normally event dispatch immediately, however
    //localStorage is a special event, dispatch on every other tab and windows except for current one
    window.dispatchEvent(new Event("storage"));
  }

  deleteItem() {
    localStorage.removeItem(this.props.coin.id);
    window.dispatchEvent(new Event("storage"));
  }

  render() {
    return (
      <td>
        <Tooltip
          title={`${
            this.state.star ? "Remove From Watch List" : "Add To Watch List"
          }`}
          arrow
        >
          <span
            className="star"
            key={this.props.coin.id}
            onClick={() => this.onButtonClick()}
          >
            <StarIcon className={`${this.state.star ? "yellow" : "grey"}`} />
          </span>
        </Tooltip>
      </td>
    );
  }
}

export default WatchListButton;
