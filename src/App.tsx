import { FoxCarousel } from "./conponents/FoxCarousel/FoxCarousel";
import Slider from "react-slick";

import "./App.css";

function App() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return <FoxCarousel isFoxCardsActive={true} />;
}

export default App;
