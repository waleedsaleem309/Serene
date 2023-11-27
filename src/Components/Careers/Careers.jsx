import React from "react";
import "./careers.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import img1 from "../../assets/001.jpg";

const Careers = () => {
  return (
    <>
      <div className="careers">
        <Header />
        <div className="careers-images">
          <div
            className="careers-image"
            style={{
              backgroundImage:
                'url("https://static.wixstatic.com/media/11062b_bb7dab2ae32345d99c22cb33c751cc37~mv2.jpeg/v1/fill/w_759,h_510,fp_0.51_0.27,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_bb7dab2ae32345d99c22cb33c751cc37~mv2.jpeg")',
            }}
          >
            <h1 className="img-heading1">Ecommerce Manager</h1>
            <h6 className="img-heading2">Full Time</h6>
          </div>
          <div
            className="careers-image"
            style={{
              backgroundImage:
                'url(" https://static.wixstatic.com/media/11062b_0f22efdae14341f787825657c2ee3829~mv2.jpeg/v1/fill/w_759,h_510,fp_0.34_0.37,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_0f22efdae14341f787825657c2ee3829~mv2.jpeg")',
            }}
          >
            <h1 className="img-heading1">Warehouse Operative</h1>
            <h6 className="img-heading2">Part Time</h6>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Careers;
