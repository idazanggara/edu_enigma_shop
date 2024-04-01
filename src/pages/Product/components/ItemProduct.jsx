import { Component } from "react";
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from "@tabler/icons-react";
import PropTypes from "prop-types";

export default class ItemProduct extends Component {
  state = {
    count: 0,
    isSaved: false,
  };

  handleDecrement = () => {
    if (this.state.count === 0) return;
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleChangeSaved = () => {
    this.setState({ isSaved: !this.state.isSaved }, () => {
      if (this.state.isSaved) {
        this.props.changeSavedCount(1);
      } else {
        this.props.changeSavedCount(-1);
      }
    });
  };

  render() {
    console.log("Called from Render");

    const { image, title, price } = this.props;

    return (
      <>
        <div className="card shadow-sm h-100">
          <img
            src={image}
            alt="product-image"
            className="card-img-top h-50 object-fit-contain"
          />
          <div className="card-body">
            <h5 className="card-title fw-light">{title}</h5>
            <p className="fw-bold">Rp. {price}</p>
          </div>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex align-items-center justify-content-start column-gap-4">
              {this.state.count === 0 ? (
                <button
                  onClick={this.handleIncrement}
                  className="d-flex align-items-center column-gap-2 btn btn-primary"
                >
                  <IconShoppingCart /> Tambah Keranjang
                </button>
              ) : (
                <>
                  <button
                    onClick={this.handleDecrement}
                    className="btn btn-primary"
                  >
                    -
                  </button>
                  <span>{this.state.count}</span>
                  <button
                    onClick={this.handleIncrement}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </>
              )}
            </div>
            <button onClick={this.handleChangeSaved} className="btn btn-link">
              <i>{this.state.isSaved ? <IconHeartFilled /> : <IconHeart />}</i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

ItemProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  changeSavedCount: PropTypes.func.isRequired,
};
