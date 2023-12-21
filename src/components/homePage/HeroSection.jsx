import React from "react";
import "./heroStyle.css";
import { FaArrowLeft } from "react-icons/fa6";

const HeroSection = ({ title, paragraph, imageSrc }) => {
  // const containerStyle = {
  //   position: 'relative',
  //   width: '100%',
  //   height: '100%',
  //   zIndex: 1,
  // };

  // const overlayStyle = {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   zIndex: 2,
  // };

  // const contentStyle = {
  //   position: 'absolute',
  //   top: '80%',
  //   left: '35%',
  //   transform: 'translate(-50%, -50%)',
  //   zIndex: 999,
  // };

  return (
    // <section className="hero d-flex flex-column align-items-center justify-content-center text-center text-white h-100 p-0 ">
    //   <div className='position-relative' style={containerStyle}>
    //     <img src={imageSrc} alt="Background image" className="img-fluid " loading="lazy" />
    //     <div className="hero-overlay" style={overlayStyle}></div>
    //     <div className="" style={contentStyle}>
    //       <h1 className='fs-1 fs-sm-3 fs-md-2 '>{title}</h1>
    //       <p className="text-lg-left text-md-left text-sm-left">{paragraph}</p>
    //     </div>
    //   </div>
    // </section>
    <section
      className="bg-image img-fluid position-relative"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute  start-0 top-0 m-3">
        <FaArrowLeft
          className="mt-2 text-white fs-1 d-flex d-md-none"
          style={{ zIndex: "999" }}
        />
      </div>
      <button className="text-white fs-4 d-flex d-md-none position-absolute top-0 end-0 m-3 style-none border-1 btn border-white bg-transparent">
        Join Group
      </button>

      <div className="position-absolute bottom-0 start-0 text-white px-4 pb-4">
        <h1 className="fw-bold">{title}</h1>
        <p className="fs-6 text-secondary text-semi-bold">{paragraph}</p>
      </div>
    </section>
  );
};

export default HeroSection;
