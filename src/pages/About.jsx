import React from 'react'
import Videoo from '../assets/www.biotechpackages.com/intro.mp4'
import Backgrounds from '../assets/www.biotechpackages.com/images/Backgrounds.png'
import Abot from '../assets/www.biotechpackages.com/images/about.webp'
import Graybg from '../assets/www.biotechpackages.com/images/graybg.png'
import Di1 from '../assets/www.biotechpackages.com/images/di1.webp'
import Di2 from '../assets/www.biotechpackages.com/images/di2.webp'
import Di3 from '../assets/www.biotechpackages.com/images/haroonelahi.webp'
import Linke from '../assets/www.biotechpackages.com/images/icons/3.png'
import Responsive from '../assets/www.biotechpackages.com/images/responsive.png'
import Integrity1 from '../assets/www.biotechpackages.com/images/integrity1.png'
import Integrity2 from '../assets/www.biotechpackages.com/images/integrity2.png'
import Innovation from '../assets/www.biotechpackages.com/images/innovation.png'
import di1 from '../assets/www.biotechpackages.com/images/di1.webp'
import Item from '../components/items'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div>
        <video autoplay="" loop="true" __idm_id__="483330" style={{ width: '100%', overflow: 'hidden' }}>
          <source src={Videoo} type="video/mp4" style={{ width: '100%', overflow: 'hidden' }} />
        </video>
      </div>

      <div class="main_Class_stories">
        <div class="stories_image">
          <img alt="" loading="lazy" decoding="async" data-nimg="fill" class="stor_img" src={Backgrounds} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} />
        </div>
        <div class="stories_data">
          <div class="container">
            <div class="content">
              <h4>
                We are Ayra Printing and Packaging Pvt. Ltd</h4>
              <h2>
                Creating digital success stories</h2>
              <p>
                Our founding aim, ethos, and what motivates everything we do, is transforming ambitious brands through world-class, results-driven digital strategies, tied to long-term commercial success.</p>
              <p class="content_para_2">
                We work with businesses committed to growth who need effective solutions and a trusted partner to drive positive change, commercial performance and to maximise their digital potential. We utilise our proven fusion of intelligent insight, strategic innovation and adventurous creative to propel client revenue and profits, increase market share and build greater brand loyalty and value.</p>
              <h3>
                We are your digital growth partner.</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="main_Class_cbd">
        <div class="cbd_image">
          <img alt="" loading="lazy" decoding="async" data-nimg="fill" class="cbd_gummies_img" src={Abot} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} />
        </div>
      </div>
      <div>
        <div class="meet" style={{marginTop:'100px'}}>
          <div class="container">
            <div class="main">
              <div class="left">
                <h1>Meet The CEO.</h1>
                <p>Ayra Printing and Packaging Pvt. Ltd is independently owned without any external influence. Meet the people behind the business.</p>
                <Link to="/about">
                  <button class="meet_button">about us</button>
                </Link>
              </div>
              <div class="right">
                <div class="imgWrapper">
                  <img src={di1} alt="Director" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="leader" style={{ paddingTop: '180px' }}>
        <div class="container">
          <div class="leadership">
            <h2>
              Leadership</h2>
            <p>
              Our founding aim, ethos, and what motivates everything we do, is transforming ambitious brands through world-class, results-driven digital strategies, tied to long-term commercial success</p>
            <div class="main_div">
              <div class="main_card">
                <div class="card_data">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ textAlign: 'center', width: '100%' }}>
                    Shahrukh Nazar Malik</h4>
                    <a href="#" target="_blank">
                      {/* <img src={Linke} alt="" style={{ width: '20px', height: '20px', display: 'flex', justifyContent: ' end' }} /> 
                    </a>
                  </div>
                  <h5>
                     CEO &amp; FOUNDER</h5>
                  <a href="/role/shoaib-muhammad">
                    <div class="vacancy_image">
                      <img src={Di1} />
                    </div>
                  </a>
                </div>
              </div>
              <div class="main_card">
                <div class="card_data">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ textAlign: 'center', width: '100%' }}>
                    Hasaan Awan</h4>
                    <a href="#" target="_blank">
                      {/* <img src={Linke} alt="" style={{ width: '20px', height: '20px', display: 'flex', justifyContent: 'end' }} /> 
                    </a>
                  </div>
                  <h5>
                  Co-Founder &amp; CTO</h5>
                  <a href="/role/ali-ahmad">
                    <div class="vacancy_image">
                      <img src={Di2} />
                    </div>
                  </a>
                </div>
              </div>
              {/* <div class="main_card">
                <div class="card_data">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ textAlign: 'center', width: '100%' }}>
                      Haroon Elahi</h4>
                    <a href="https://www.linkedin.com/in/haroon-elahi-biotech/" target="_blank">
                      <img src={Linke} alt="" style={{ width: '20px', height: '20px', display: 'flex', justifyContent: 'end' }} />
                    </a>
                  </div>
                  <h5>
                    Executives Director</h5>
                  <a href="/role/haroon-elahi">
                    <div class="vacancy_image">
                      <img src={Di3} />
                    </div>
                  </a>
                </div>
              </div> 
            </div>
          </div>
        </div> */}
        <div style={{ marginBottom: '-1px' }}>
          <img src={Graybg} style={{ width: '100%', margin: 'auto', transform: 'rotate(180deg)' }} />
        </div>
      {/* </div>  */}
      <div class="main_Class_values">
        <div class="values_data">
          <div class="content">
            <div class="container">
              <div class="content_inner">
                <h2>
                  Our Core Values </h2>
                <div class="row">
                  <div class="height_adjust col-xl-3 col-md-3 col-6">
                    <div class="height">
                      <img alt="Responsive Image" loading="lazy" width="115" height="115" decoding="async" data-nimg="1" class="aboutimg_para" src={Responsive} style={{ color: 'transparent' }} />
                    </div>
                    <p class="values_para">
                      Responsive</p>
                  </div>
                  <div class="height_adjust col-xl-3 col-md-3 col-6">
                    <div class="height">
                      <img alt="integrity Image" loading="lazy" width="115" height="75" decoding="async" data-nimg="1" class="aboutimg_para" src={Integrity1} style={{ color: 'transparent' }} />
                    </div>
                    <p class="values_para">
                      Commitment</p>
                  </div>
                  <div class="height_adjust col-xl-3 col-md-3 col-6">
                    <div class="height">
                      <img alt="integrity Image" loading="lazy" width="81" height="85" decoding="async" data-nimg="1" class="aboutimg_para" src={Integrity2} style={{ color: 'transparent' }} />
                    </div>
                    <p class="values_para">
                      Integrity</p>
                  </div>
                  <div class="height_adjust col-xl-3 col-md-3 col-6">
                    <div class="height">
                      <img alt="innovation Image" loading="lazy" width="89" height="100" decoding="async" data-nimg="1" class="aboutimg_para" src={Innovation} style={{ color: 'transparent' }} />
                    </div>
                    <p class="values_para">
                      Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Item />
    </>

  )
}

export default About