import React, { useState } from 'react';
import headimg from "./Hero-companent/Image/young woman sitting with a laptop and waving her hand.png";
import bgimg from "./Hero-companent/Image/EllipseWoman.png";
import Buttons from "./Hero-companent/companent/buttons";
import style from "./hero.module.css";
// profile-photos
import oneprofile from "./Hero-companent/Image/profile-image/Ellipse 46.svg";
import twoprofile from "./Hero-companent/Image/profile-image/Ellipse 81.svg";
import threeprofile from "./Hero-companent/Image/profile-image/Ellipse 82.svg";
import fourprofile from "./Hero-companent/Image/profile-image/Ellipse 83.svg";
import fewprofile from "./Hero-companent/Image/profile-image/Ellipse 84.svg";
// light
// import light from "./Hero-companent/Image/off.png";
// animation
// import AnimatedComponent  from "./Hero-companent/companent/AnimatedCompanent.js"
// light
import Light from "./Hero-companent/companent/Lighttoogle";

const Hero = () => {
  const [isLightOn, setLightOn] = useState(false);

  const handleToggle = (isOn) => {
    setLightOn(isOn);
  };

  const handleContainerClick = () => {
    setLightOn(!isLightOn);
  };

  return (
    <section id="hero">
      <div className="container-hero p-3 ">
        <div className="row">
          <div className="col-xl-7 d-flex align-items-center justify-content-center">
            <div className={style.textHero}>
              <p>Rəqəmsal dünyaya</p>
              <p> keçid et!</p>
              <Buttons className={style.btnGnrl} text={"Bizimlə əlaqə"} />
            </div>
          </div>
          <div className="col-xl-5" style={{ position: "relative" }} >
            <div className={style.texHeaderImg}>
              <div className={style.logoAdd}>
                {/* <AnimatedComponent /> */}
                <div className={style.logoOne}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="81"
                    height="69"
                    viewBox="0 0 81 69"
                    fill="none"
                  >
                    <ellipse
                      cx="40.5"
                      cy="34.5684"
                      rx="39.9692"
                      ry="33.4369"
                      transform="rotate(-15.6301 40.5 34.5684)"
                      fill="url(#paint0_linear_1231_3838)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1231_3838"
                        x1="40.5"
                        y1="1.13148"
                        x2="40.5"
                        y2="68.0052"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4663A9" />
                        <stop offset="0.9999" stop-color="#F15958" />
                        <stop
                          offset="1"
                          stop-color="#097514"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={style.logotwo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="93"
                    viewBox="0 0 57 93"
                    fill="none"
                  >
                    <ellipse
                      cx="28.7014"
                      cy="46.2369"
                      rx="26.0092"
                      ry="46.9666"
                      transform="rotate(-15.6301 28.7014 46.2369)"
                      fill="url(#paint0_linear_1231_3811)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1231_3811"
                        x1="28.7014"
                        y1="-0.729694"
                        x2="28.7014"
                        y2="93.2034"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4663A9" />
                        <stop offset="0.9999" stop-color="#F15958" />
                        <stop
                          offset="1"
                          stop-color="#097514"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={style.logothree}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="44"
                    viewBox="0 0 48 44"
                    fill="none"
                  >
                    <ellipse
                      cx="24.0162"
                      cy="22.1331"
                      rx="23.5817"
                      ry="21.6637"
                      transform="rotate(-15.6301 24.0162 22.1331)"
                      fill="url(#paint0_linear_1231_3812)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1231_3812"
                        x1="24.0162"
                        y1="0.469378"
                        x2="24.0162"
                        y2="43.7968"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4663A9" />
                        <stop offset="0.9999" stop-color="#F15958" />
                        <stop
                          offset="1"
                          stop-color="#097514"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className={`${style.bgText} ${style.website}`}>Website</p>
              <p className={`${style.bgText} ${style.seo}`}>SEO</p>
              <p className={`${style.bgText} ${style.smm}`}>SMM</p>
              <p className={`${style.bgText} ${style.branding}`}>Branding</p>
            </div>
            {/* <img className={style.light} src={light} alt="logo" /> */}
            <Light isLightOn={isLightOn} onToggle={handleToggle} />
            <img className={style.bgImage} src={bgimg} alt="foto" onClick={handleContainerClick} />
            <img className={style.headImage} src={headimg} alt="foto" />
          </div>
        </div>
        <div className="container my-5 d-flex justify-content-center ">
          <div className={style.content}>
            <div className={style.resultBranding}>
              <p>Branding</p>
              <p>27K+</p>
            </div>
            <div className={style.resultBranding}>
              <p>Website</p>
              <p>25K+</p>
            </div>
            <div className={style.resultBranding}>
              <p>Marketing</p>
              <p>12K+</p>
            </div>
            <div className={style.art}>
              <p>Art 3.4 ETH</p>
              <div className={style.cardProfile}>
                <img src={oneprofile} alt="photo" />
                <img src={twoprofile} alt="photo" />
                <img src={threeprofile} alt="photo" />
                <img src={fourprofile} alt="photo" />
                <img src={fewprofile} alt="photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
