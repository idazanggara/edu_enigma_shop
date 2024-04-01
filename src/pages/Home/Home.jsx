import { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <AboutUs />
        <Testimonial />
        <ContactUs />
        <Footer />
      </>
    );
  }
}
