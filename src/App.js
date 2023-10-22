import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import Choose from "./components/choose/Choose";
import Stats from "./components/stats/Stats";
import Gallery from "./components/Gallery/Gallery";
import Offer from "./components/Offer/Offer";
import Team from "./components/Team/Team";
import Reservation from "./components/Reservation/Reservation";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Stats />
      <Gallery />
      <Offer />
      <Team />
      <Reservation />
      <Testimonials />
    </>
  );
}

export default App;
