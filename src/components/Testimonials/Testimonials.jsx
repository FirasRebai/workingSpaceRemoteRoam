import { Container, IconButton } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardTestimonial from "./CardTestimonial";
import SectionContainer from "./SectionContainer";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <IconButton>
        <ArrowForwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <IconButton>
        <ArrowBackIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

const Testimonials = () => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const settings = {
    lazyload: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    pauseOnHover: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };

  return (
    <SectionContainer title={"Recent Reviews"}  id={'sectionAvis'}>
      <Container maxWidth="lg">
        <Slider {...settings}>
          {witnesses.map((witness, idx) => (
            <span
            key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <CardTestimonial witness={witness} />
            </span>
          ))}
        </Slider>
      </Container>
    </SectionContainer>
  );
};

const witnesses = [
  {
    name: "Ahmed Bk",
    job: "Ingenieur en informatique",
    img: "https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png",
    content:
      "VodFlow by Satoripop, built on Microsoft Azure Media Services, allowed tunisie Telecom to launch Hayya.tn Redbull video Portal promptly, which targeted tens of thousands of our customers.",
  },
  {
    name: "Guezguez",
    job: "Ingenieur en informatique",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    content:
      "VodFlow by Satoripop, built on Microsoft Azure Media Services, allowed tunisie Telecom to launch Hayya.tn Redbull video Portal promptly, which targeted tens of thousands of our customers.",
  },
  {
    name: "mehdi",
    job: "Ingenieur en informatique",
    img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    content:
      "VodFlow by Satoripop, built on Microsoft Azure Media Services, allowed tunisie Telecom to launch Hayya.tn Redbull video Portal promptly, which targeted tens of thousands of our customers.",
  },
  {
    name: "Djo",
    job: "Ingenieur en informatique",
    img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    content:
      "VodFlow by Satoripop, built on Microsoft Azure Media Services, allowed tunisie Telecom to launch Hayya.tn Redbull video Portal promptly, which targeted tens of thousands of our customers.",
  },
];

export default Testimonials;
