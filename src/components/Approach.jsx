import React from "react";
import S1 from '../assets/www.biotechpackages.com/1.png'
import brand from '../assets/www.biotechpackages.com/home/brand.png'
import boxes from '../assets/www.biotechpackages.com/boxes.webp'
import S2 from '../assets/www.biotechpackages.com/1.png'
import S4 from '../assets/www.biotechpackages.com/4.png'
import S3 from '../assets/www.biotechpackages.com/3.png'

const Approach = () => {
  return (
    <>
      <div class="main-Approchss">
        <div class="approchss_img">
          <img
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            src={brand}
            style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                objectFit: 'cover',
                objectPosition: 'center center',
                color: 'transparent',
              }}
          />
        </div>
        <div class="approchss_data">
          <div class="container">
            <div class="approchss_data_inner">
              <div class="approch_datass">
                <h3 class="approch_heading">Approch</h3>
                <h5 class="approch_title">
                  Our approach to every packaging is different.
                </h5>
                <p class="approch_para">
                  Every item of packaging is created just for you and your
                  brand. We offer top class designs at affordable prices and
                  fast turnarounds. From flyers and business cards to folded
                  pamphlets, brochures and lot more! We design it all.
                </p>
                <a href="#">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{textTransform: "uppercase"}}
                  >
                    Get a quote
                  </button>
                </a>
              </div>
              <div class="image_sectionss">
                <img
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  class="main"
                  src={boxes}
                  style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      inset: '0px',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      color: 'transparent',
                    }}
                />
                <div class="one">
                  <img
                    loading="lazy"
                    width="146"
                    height="158"
                    decoding="async"
                    data-nimg="1"
                    class=""
                    src={S2}
                    style={{color: 'transparent'}}
                  />
                </div>
                <div class="two">
                  <img
                    loading="lazy"
                    width="146"
                    height="158"
                    decoding="async"
                    data-nimg="1"
                    class=""
                    src={S4}
                    style={{color: 'transparent'}}
                  />
                </div>
                <div class="three">
                  <img
                    loading="lazy"
                    width="146"
                    height="158"
                    decoding="async"
                    data-nimg="1"
                    class=""
                    src={S3}
                    style={{color: 'transparent'}}
                  />
                </div>
                <div class="four">
                  <img
                    loading="lazy"
                    width="146"
                    height="158"
                    decoding="async"
                    data-nimg="1"
                    class=""
                    src={S1}
                    style={{color: 'transparent'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approach;
