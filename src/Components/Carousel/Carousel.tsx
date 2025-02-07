import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC<({children: React.ReactNode})> = (props) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "2.2rem",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  );
}

export default Carousel;
