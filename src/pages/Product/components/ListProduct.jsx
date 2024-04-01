import { Component } from "react";
import { IconBookmarks, IconShoppingCart } from "@tabler/icons-react";
import ItemProduct from "./ItemProduct";

export default class ListProduct extends Component {
  state = {
    itemCount: 0,
    savedCount: 0,
  };

  handleChangeSavedCount = (number) => {
    this.setState({
      savedCount: this.state.savedCount + number,
    });
  };

  render() {
    return (
      <section>
        <div className="container shadow-sm p-4 my-4 rounded-2">
          <div className="d-flex justify-content-between">
            <h2 className="my-2">List Product Enigma Shop</h2>
            <div className="d-flex justify-content-end column-gap-2">
              <p className="text-end my-2">
                <IconBookmarks />
                <span className="badge text-bg-secondary rounded-pill">
                  {this.state.savedCount}
                </span>
              </p>
              <p className="text-end my-2">
                <IconShoppingCart />
                <span className="badge text-bg-primary rounded-pill">
                  {this.state.itemCount}
                </span>
              </p>
            </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-1 g-4">
            <div className="col">
              <ItemProduct
                image="https://wingscorp.com/wp-content/uploads/2021/11/IMG-20211201-WA0003.jpg"
                title="Ale Ale"
                price={2000}
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-10906782/beng-beng_beng-beng-coklat-wafer-20g_full01.jpg"
                title="Beng Beng"
                price={3000}
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://filebroker-cdn.lazada.co.id/kf/S865ba4777dc140b7978ee0c47fbd681bq.jpg"
                title="Granita"
                price={2000}
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
            <div className="col">
              <ItemProduct
                image="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-14180939/biskuat_biskuat_coklat_140gr_full02_kyswxeip.jpeg"
                title="Biskuat"
                price={4000}
                changeSavedCount={this.handleChangeSavedCount}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
