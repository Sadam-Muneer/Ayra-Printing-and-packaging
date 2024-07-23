import React from "react";
import medal from '../assets/www.biotechpackages.com/images/medal.png'
import printer from '../assets/www.biotechpackages.com/images/printer.png'
import circles from '../assets/www.biotechpackages.com/images/circles.png'
import double from '../assets/www.biotechpackages.com/images/double.png'
import shirt from '../assets/www.biotechpackages.com/images/shirt.png'
import color from '../assets/www.biotechpackages.com/images/colors.png'
import file from '../assets/www.biotechpackages.com/images/file.png'
import tick from '../assets/www.biotechpackages.com/images/tick.png'
import mobile from '../assets/www.biotechpackages.com/home/Mobile Mockup.png'
import { Link } from "react-router-dom";




const About = () => {

   
  return (
    <>
      <div class="main-about">
        <div class="aboutdata_img">
          <div class="about_section">
            <h1>About Us</h1>
            <p>
              Welcome to the Ayra Printing and Packaging Pvt. Ltd, we are designers and
              manufactures of bespoke packaging product. Ayra Printing and Packaging Pvt. Ltd
               is full-service printing and fulfillment company. We can
              assist your organization with virtually any type of printed
              project and manage every step -- from pre-press to printing,
              finishing, fulfillment, and even a few web solutions.
            </p>
            <div class="row">
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Medal Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={medal}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">
                  Award winning UV Offset Printing Capabilities
                </p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Printer Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={printer}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">Green Printing Materials and Processes</p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Printed in full color Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={circles}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">Printed in full-color</p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Double Sided Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={double}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">Double-sided</p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Printing Shirt Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={shirt}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">
                  Customized Web-to-Print Online Printing capabilities
                </p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Advanced Color Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={color}
                  style={{color: 'transparent'}}

                />
                <p class="about_para">
                  Advanced Color Management and G7 Master Qualified
                </p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="File Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={file}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">Variety of paper sizes</p>
              </div>
              <div class="col-xl-3 col-md-3 col-6">
                <img
                  alt="Tick Image"
                  loading="lazy"
                  width="57"
                  height="57"
                  decoding="async"
                  data-nimg="1"
                  class="aboutimg_para"
                  src={tick}
                  style={{color: 'transparent'}}
                />
                <p class="about_para">Optional finishing</p>
              </div>
            </div>
            <Link to="/About">
              <button class="about_btn">LEARN MORE</button>
            </Link>
          </div>
          <div class="abcd">
            <img
              alt="Facebook Logo Image"
              loading="lazy"
              width="1034"
              height="916"
              decoding="async"
              data-nimg="1"
              class="aboutbiotech_img"
              src={mobile}
              style={{color: 'transparent'}}
            />
          </div>
          <Link to="/About">
            <button class="about_lastbtn">LEARN MORE</button>
            </Link>
        </div>
      </div>
      
    </>
  );
};

export default About;
