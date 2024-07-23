import React from 'react';
import Contact from '../assets/www.biotechpackages.com/images/contact.png'
import Whatsapp from '../assets/www.biotechpackages.com/images/icons/1.png'
import Insta from '../assets/www.biotechpackages.com/images/icons/2.png'
import Linke from '../assets/www.biotechpackages.com/images/icons/3.png'
import Map from '../components/map'
import Cont from '../assets/www.biotechpackages.com/contact.mp4'
import { Link } from 'react-router-dom';
import Group53 from "../assets/www.biotechpackages.com/images/Group53.png";

// import Footerc from '../assets/www.biotechpackages.com/images/icons/footer_change.png'

const Contacts = () => {

  return (
    <>
      <div className="main_Class_biotech">
        <video className="biotech_video_section" width="100%" autoPlay loop muted>
          <source
            className="biotech_video"
            src={Cont}
            type="video/mp4"
          />
          

      </video>
      <div className="bg_image" style={{ width: '100%' }}>
        <img src={Contact} alt="" style={{ width: '100%' }} />
      </div>
      <div className="container">
        <div className="img_data">
          <div className="main_contact">
            <div className="main_num">
              <Link to="tel:+923467133632" style={{ color: 'white' }}>
                <p className="num">+92 346 7133632</p>
              </Link>
              <Link to="mailto:ayraprintandpackaging@gmail.com" style={{ color: 'white' }}>
                <p className="num nums">ayraprintandpackaging@gmail.com</p>
              </Link>
              <Link to="tel:+923467133632">
                <button className="butns" style={{padding: '5px'}}>BOOK CALL</button>
              </Link>
            </div>
            <div className="icons">
              <Link target="_blank" to="https://api.whatsapp.com/send?phone=+923467133632&amp;text=Salam.">
                <img src={Whatsapp} alt="" />
              </Link>
              <Link target="_blank" to="/">
                <img src={Insta} alt="" />
              </Link>
              <Link
                to="https://www.facebook.com/ayraprintnpack"
                target="_blank"
              >
                <img
                  alt="Facebook Logo Image"
                  loading="lazy"
                  width="35"
                  height="35"
                  decoding="async"
                  data-nimg="1"
                  src={Group53}
                  style={{ color: "transparent" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
      <div class="main_form">
        <div class="form">
          <h3>DO YOU HAVE A QUESTION?</h3>
          <p>We’d love to hear from you!</p>
          <form>
            <div class="first_last">
              <div class="first">
                <input type="text" placeholder="First Name" name="firstname" value="" />
              </div>
              <div class="last">
                <input type="text" placeholder="Last Name" name="lastname" value="" />
              </div>
            </div>
            <div class="mail_num">
              <div class="mail">
                <input type="email" placeholder="Enter your email*" name="email" value="" />
              </div>
              <div class="num">
                <input type="number" placeholder="Enter phone no*" name="phone" value="" />
              </div>
            </div>
            <div class="text_area">
              <textarea name="message" cols="100" rows="10" placeholder="How can we help you!"></textarea>
            </div>
            <div>
              <button class="send_button">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
      <Map />
      
    </>
  );
}

export default Contacts;
