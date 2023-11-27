import React from "react";
import "./carousel.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Carosel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <meta name="viewport" content="width=device width, initial-scale=1.0" />
      <div className="carousel-images">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_bb7dab2ae32345d99c22cb33c751cc37~mv2.jpeg/v1/fill/w_1895,h_1263,al_c,q_90,usm_0.66_1.00_0.01/11062b_bb7dab2ae32345d99c22cb33c751cc37~mv2.jpeg&quot"
              alt="img1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_0f22efdae14341f787825657c2ee3829~mv2.jpeg/v1/fill/w_1800,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_0f22efdae14341f787825657c2ee3829~mv2.jpeg&quot"
              alt="img2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/086c5d22c3f24976b166c7c601fbdafe.jpg/v1/fill/w_1800,h_1200,al_c,q_90,usm_0.66_1.00_0.01/086c5d22c3f24976b166c7c601fbdafe.jpg&quot"
              alt="img3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_83f7f87f383146bc8bc27774ef8e41bd~mv2.jpeg/v1/fill/w_1800,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_83f7f87f383146bc8bc27774ef8e41bd~mv2.jpeg&quot"
              alt="img4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_80dc13fc8b2e4933be776a6ee3a8c302~mv2.jpeg/v1/fill/w_1797,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_80dc13fc8b2e4933be776a6ee3a8c302~mv2.jpeg&quot"
              alt="img5"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/72194fb7c89f415dbf110e72b8f93b43.jpg/v1/fill/w_1814,h_1200,al_c,q_90,usm_0.66_1.00_0.01/72194fb7c89f415dbf110e72b8f93b43.jpg&quot"
              alt="img6"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_d00e49cf48f14a40adda61b8c7abbe27~mv2_d_4700_3137_s_4_2.jpg/v1/fill/w_1797,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_d00e49cf48f14a40adda61b8c7abbe27~mv2_d_4700_3137_s_4_2.jpg&quot"
              alt="img7"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_939204ae9b614238a9e6d17a9368b38f~mv2.jpeg/v1/fill/w_1800,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_939204ae9b614238a9e6d17a9368b38f~mv2.jpeg&quot"
              alt="img8"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_833cd6936e324e8daf221cc23916acf6~mv2.jpeg/v1/fill/w_1797,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_833cd6936e324e8daf221cc23916acf6~mv2.jpeg&quot"
              alt="img9"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://static.wixstatic.com/media/11062b_17c5bf008cd844d2ac1896e1cbf03722~mv2.jpeg/v1/fill/w_1800,h_1200,al_c,q_90,usm_0.66_1.00_0.01/11062b_17c5bf008cd844d2ac1896e1cbf03722~mv2.jpeg&quot"
              alt="img10"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carosel;
