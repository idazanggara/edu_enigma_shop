import { Component } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-primary py-4 text-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-4 gy-4">
            <div>
              <nav>
                <h4>Keperluan Rumah</h4>
                <div>A second item</div>
                <div>A third item</div>
                <div>A fourth item</div>
                <div>And a fifth one</div>
              </nav>
            </div>
            <div>
              <nav>
                <h4>Makanan & Minuman</h4>
                <div>A second item</div>
                <div>A third item</div>
                <div>A fourth item</div>
                <div>And a fifth one</div>
              </nav>
            </div>
            <div>
              <nav>
                <h4>Lain lain</h4>
                <div>A second item</div>
                <div>A third item</div>
                <div>A fourth item</div>
                <div>And a fifth one</div>
              </nav>
            </div>
            <div>
              <h4>Ikuti Kami</h4>
              <div className="socmed-group my-3">
                <span>
                  <IconBrandInstagram />
                </span>
                <span>
                  <IconBrandFacebook />
                </span>
                <span>
                  <IconBrandTwitter />
                </span>
                <span>
                  <IconBrandLinkedin />
                </span>
              </div>
              <h5 className="mt-2">Berlangganan Sekarang</h5>
              <form className="row">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control-sm rounded-0"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-light rounded-0 mt-2">
                    Langganan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
