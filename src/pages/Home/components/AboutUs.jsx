import { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <section
        className="bg-light py-4 d-flex align-items-center"
        style={{ minHeight: "40dvh" }}
        id="tentang-kami"
      >
        <div className="container">
          <h2 className="text-center fw-bold">Tentang Kami</h2>
          <p className="text-center">
            Enigma Shop adalah toko kelontong terpercaya yang berkomitmen untuk
            memenuhi kebutuhan masyarakat dengan menyediakan berbagai produk
            makanan dan keperluan sehari-hari. Didirikan di Jakarta, kami
            berusaha keras untuk menjadi bagian dari komunitas dengan memberikan
            layanan terbaik dan produk berkualitas.
          </p>
        </div>
      </section>
    );
  }
}
