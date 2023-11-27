import React from "react";
import "./AboutUs2.css";

const AboutUs2 = () => {
  return (
    <>
      <div className="aboutUs2">
        <div>
          <img
            className="aboutUs2-img"
            src="https://static.wixstatic.com/media/11062b_80dc13fc8b2e4933be776a6ee3a8c302~mv2.jpeg/v1/crop/x_891,y_0,w_4017,h_3668/fill/w_690,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Warehouse%20Team%20in%20Meeting.jpeg"
            alt="aboutUs2Image"
          />
        </div>
        <div className="aboutUs2-leftSection">
          <h1 className="aboutUs2-heading1">Satisfaction Guaranteed</h1>
          <h5 className="aboutUs2-heading2">Truly Top-Notch</h5>
          <p className="aboutUs2-paragaraph">
            With years of industry experience, our team of seasoned
            professionals brings unparalleled expertise to the table. We
            navigate the complexities of global markets with precision, staying
            ahead of industry trends and developments to provide you with
            informed and strategic solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs2;
