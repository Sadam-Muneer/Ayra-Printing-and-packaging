import React from 'react'
import Labandstick from '../assets/www.biotechpackages.com/images/labandstick.webp'
import { Link } from 'react-router-dom';
import Right from '../assets/www.biotechpackages.com/images/icons/right.png'
// import Bottom from '../assets/www.biotechpackages.com/images/icons/bottom.png'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Miximg from '../assets/www.biotechpackages.com/images/mix_img.png'
import Laptop from '../assets/www.biotechpackages.com/images/laptop.png'
import Icon8 from '../assets/www.biotechpackages.com/images/icons/icons8-menu.svg'
const Sticker = () => {
  const products = [
    {
      link: "/bottle-labels",
      alt: "Bottle Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fbottles%20labels.pngTue%20Aug%2022%202023%2018%3A51%3A12%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=98236cb3-23e3-4a13-aadf-b2cc43246652",
      title: "Bottle Labels",
    },
    {
      link: "/clear-labels",
      alt: "Clear Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fclear.pngTue%20Aug%2022%202023%2019%3A03%3A17%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ae61b56c-14a8-436e-8fc7-06bbb92efc78",
      title: "Clear Labels",
    },
    {
      link: "/custom-labels",
      alt: "Custom Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fcustom%20labels.pngTue%20Aug%2022%202023%2019%3A04%3A23%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=c80afc7c-0a63-441a-849b-2a8686124e2d",
      title: "Custom Labels",
    },
    {
      link: "/foil-labels",
      alt: "Foil Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Ffoil.pngTue%20Aug%2022%202023%2019%3A16%3A32%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=e808f6fb-239e-446a-9800-9f1cfcdd83b6",
      title: "Foil Labels",
    },
    {
      link: "/holographic-labels",
      alt: "Holographic Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fholographic.pngTue%20Aug%2022%202023%2019%3A19%3A32%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=8780f322-5b59-409e-9bc8-b0e3b572ec1f",
      title: "Holographic Labels",
    },
    {
      link: "/kiss-cut-labels",
      alt: "Kiss Cut Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fkiss%20cut.pngTue%20Aug%2022%202023%2019%3A21%3A05%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=a0e5306e-ff16-47ec-acc9-5567356d1f76",
      title: "Kiss Cut Labels",
    },
    {
      link: "/thermal-labels",
      alt: "Thermal Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fmailing%20adress%20labels.pngTue%20Aug%2022%202023%2019%3A21%3A58%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=911ee509-cccd-4638-a1eb-ee11cfd11d0b",
      title: "Thermal Labels",
    },
    {
      link: "/vinyl-labels",
      alt: "Vinyl Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fvinyl.pngTue%20Aug%2022%202023%2019%3A35%3A21%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=04c0d39d-88ee-4a49-9c7e-62c4b598f0cb",
      title: "Vinyl Labels",
    },
    {
      link: "/water-proof-labels",
      alt: "Water Proof Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fwaterproof.pngMon%20Aug%2028%202023%2017%3A41%3A13%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=6bd2e49f-5b0b-45a7-a398-40623c037fe8",
      title: "Water Proof Labels",
    },
    {
      link: "/metallic-labels",
      alt: "Metallic Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fmetalic.pngMon%20Aug%2028%202023%2018%3A31%3A01%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=7b7d31f7-6628-4eec-a9c2-f263ab3695c8",
      title: "Metallic Labels",
    },
    {
      link: "/paper-labels",
      alt: "Paper Labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2Fpaper-labels.pngFri%20Sep%2022%202023%2017%3A43%3A23%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=86153ddd-8d6e-4379-b706-563cc7c870e6",
      title: "Paper Labels",
    },
    {
      link: "/pe-labels",
      alt: "PE labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2Fpe-labels.pngFri%20Sep%2022%202023%2017%3A44%3A45%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=04e1c65c-9b88-4b62-9587-76283122f085",
      title: "PE labels",
    },
    {
      link: "/PP-labels",
      alt: "PP labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2Fpp-labels.pngFri%20Sep%2022%202023%2017%3A45%3A47%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&token=9301ca5c-07cd-42a7-927f-e95850012a78",
      title: "PP labels",
    },
    {
      link: "/Security-labels",
      alt: "Security labels",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2Fsecurity-labels.pngFri%20Sep%2022%202023%2017%3A46%3A42%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&token=c39ab6e5-9fb1-4ffd-8fa2-f1040bd31ca0",
      title: "Security labels",
    }
  ];
  return (
    <>
      <div class="main_subservicebanner index1">
        <div class="subservice_banner">
          <img alt="banner" loading="lazy" decoding="async" data-nimg="fill" class="subservice_banner_image" src={Labandstick} style={{ position: 'absolute', height: ' 100%', width: ' 100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} />
        </div>
        <div class="subservice_banner_data">
          <div class="subservice_content">
            <h2>Stickers &amp; Labels</h2>
            <p>Looking for inspiration or just starting out? These labels &amp; Stickers are a great place to begin</p>
          </div>
        </div>
      </div>

      <div>
        <div className="main_shopboxx">
          <div className="main_section_package_pack">
            <div name="myScrollToElement"></div>
            <h3 id="myScrollToElement2" className="subservicepack_head">
              Custom Stickers & Labels
            </h3>
            <p className="subservicepack_para" style={{ maxWidth: '500px', marginBottom: '10px', minHeight: '65px' }}>
              A wide range of premium stickers & labels, suitable for various industries.
            </p>
            <div className="ham_icons1">
              <img src={Icon8} alt="Hamburger Icon" />
            </div>
            <div className="packaging_butn">
              <button type="button" className="package_btn btn btn-primary">
                <Link to="tel:923103330109" style={{ color: 'white', textTransform: 'uppercase' }}>
                  Stickers & Labels Consultant
                </Link>
              </button>
            </div>
          </div>

          <div className="container">
            <div className="pack_package">
              <div className="main_sidemenu">
                <h1 className="top_category">Category</h1>
                <hr />
                <div className="Faq_section">
                  <div className="faq_question1">
                    <div className="acordianss change_bg">
                      <h5 style={{ fontWeight: 600 }}>Labels</h5>
                      <div className="icon_style1">
                        <img
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="arrow_ico"
                          src={Right}
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            color: 'transparent',
                          }}
                          alt="Arrow Icon"
                        />
                      </div>
                    </div>

                    <div className="SubMenu para1">
                      <Link to="/bottle-labels">
                        <p>Bottle Labels</p>
                      </Link>
                      <Link to="/clear-labels">
                        <p>Clear Labels</p>
                      </Link>
                      <Link to="/custom-labels">
                        <p>Custom Labels</p>
                      </Link>
                      <Link to="/foil-labels">
                        <p>Foil Labels</p>
                      </Link>
                      <Link to="/holographic-labels">
                        <p>Holographic Labels</p>
                      </Link>
                      <Link to="/kiss-cut-labels">
                        <p>Kiss Cut Labels</p>
                      </Link>
                      <Link to="/thermal-labels">
                        <p>Thermal Labels</p>
                      </Link>
                      <Link to="/vinyl-labels">
                        <p>Vinyl Labels</p>
                      </Link>
                      <Link to="/water-proof-labels">
                        <p>Water Proof Labels</p>
                      </Link>
                      <Link to="/metallic-labels">
                        <p>Metallic Labels</p>
                      </Link>
                      <Link to="/paper-labels">
                        <p>Paper Labels</p>
                      </Link>
                      <Link to="/pe-labels">
                        <p>PE labels</p>
                      </Link>
                      <Link to="/pp-labels">
                        <p>PP Labels</p>
                      </Link>
                      <Link to="/security-labels">
                        <p>Security Labels</p>
                      </Link>
                    </div>
                  </div>
                  <div className="faq_question1">
                    <div className="acordianss">
                      <h5 style={{ fontWeight: 600 }}>Stickers</h5>
                      <div className="icon_style2">
                        <img
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="arrow_ico"
                          src={Right}
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: '0px',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            color: 'transparent',
                          }}
                          alt="Arrow Icon"
                        />
                      </div>
                    </div>
                    <div className="SubMenu para">
                      <Link to="/arch-stickers">
                        <p>Arch Stickers</p>
                      </Link>
                      <Link to="/clear-stickers">
                        <p>Clear Stickers</p>
                      </Link>
                      <Link to="/custom-shape-stickers">
                        <p>Custom Shape Stickers</p>
                      </Link>
                      <Link to="/cut-to-size-stickers">
                        <p>Cut To Size Stickers</p>
                      </Link>
                      <Link to="/die-cut-sheet-stickers">
                        <p>Die Cut Sheet Stickers</p>
                      </Link>
                      <Link to="/3d-stickers">
                        <p>3D Stickers</p>
                      </Link>
                      <Link to="/foil-stickers">
                        <p>Foil Stickers</p>
                      </Link>
                      <Link to="/kiss-cut-stickers">
                        <p>Kiss Cut Stickers</p>
                      </Link>
                      <Link to="/name-stickers">
                        <p>Name Stickers</p>
                      </Link>
                      <Link to="/useable-stickers">
                        <p>Useable Stickers</p>
                      </Link>
                      <Link to="/roll-stickers">
                        <p>Roll Stickers</p>
                      </Link>
                      <Link to="/round-stickers">
                        <p>Round Stickers</p>
                      </Link>
                      <Link to="/sheet-sticker">
                        <p>Sheet Sticker</p>
                      </Link>
                      <Link to="/square-rectangle-stickers">
                        <p>Square-Rectangle Stickers</p>
                      </Link>
                      <Link to="/vinyl-stickers">
                        <p>Vinyl Stickers</p>
                      </Link>
                      <Link to="/hexagone-stickers">
                        <p>Hexagone Stickers</p>
                      </Link>
                      <Link to="/metallic-stickers">
                        <p>Metallic Stickers</p>
                      </Link>
                      <Link to="/starburst-stickers">
                        <p>Starburst Stickers</p>
                      </Link>
                      <Link to="/hologram-stickers">
                        <p>Hologram Stickers</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="shop_need">
                  <h3 className="top_categoryy">Shop by Need</h3>
                  <hr />
                </div>
              </div>
              <div style={{ width: '100%' }}>
                <div className='main_products_packag'>
                  <div className="main_products_packag2">
                    {products.map((product, index) => (
                      <Link key={index} to={product.link} style={{ color: 'black' }}>
                        <div className="bottom">
                          <div className="head_and_imagge">
                            <div className="image">
                              <img
                                alt={product.alt}
                                decoding="async"
                                src={product.imgSrc}
                              />
                            </div>
                            <div className="head" style={{ maxWidth: '322px' }}>
                              <h3>{product.title}</h3>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            {/* <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <ul className="ant-pagination css-yp8pcc">
                <li title="Previous Page" className="ant-pagination-prev ant-pagination-disabled" aria-disabled="true">
                  <button className="ant-pagination-item-link" type="button" tabIndex="-1" disabled>
                    <span role="img" aria-label="left" className="anticon anticon-left">
                      <LeftOutlined />
                    </span>
                  </button>
                </li>
                <li title="1" className="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active" tabIndex="0">
                  <Link rel="nofollow">1</Link>
                </li>
                <li title="2" className="ant-pagination-item ant-pagination-item-2" tabIndex="0">
                  <Link rel="nofollow">2</Link>
                </li>
                <li title="Next Page" tabIndex="0" className="ant-pagination-next" aria-disabled="false">
                  <button className="ant-pagination-item-link" type="button" tabIndex="-1">
                    <span role="img" aria-label="right" className="anticon anticon-right">
                      <RightOutlined />
                    </span>
                  </button>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div>
          <img src={Miximg} alt="" style={{ width: '100%', margin: 'auto' }} />
        </div>
        <div>
          <div className="main_sidemenus hidden1">
            <div className="container">
              <div className="main_close_icon">
                <img
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className="close_icon"
                  src="/images/closee.svg"
                  style={{ color: 'transparent' }}
                  alt="Close"
                />
              </div>
              <h2 className="top_category">Category</h2>
              <hr />
              <div className="Faq_section">
                <div>
                  <div className="faq_question1">
                    <div className="accordianss">
                      <h3 className="custom_box_upperr">Labels</h3>
                    </div>
                  </div>
                  <div className="faq_question1">
                    <div className="accordianss">
                      <h3 className="custom_box_upperrs">Stickers</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop_need">
                <h3 className="top_categoryy">Shop by Need</h3>
                <hr />
              </div>
            </div>
          </div>

          <div>
            <div className="container">
              <div className="main_shop_by_need">
                <div className="main_need">
                  <h2>Shop by Need</h2>
                  <div className="need_section">
                    <div className="slide_need">
                      <img
                        className="one_image_need"
                        src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fbottles%20labels.pngTue%20Aug%2022%202023%2018%3A51%3A12%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=98236cb3-23e3-4a13-aadf-b2cc43246652"
                        alt="Bottle Labels"
                      />
                      <Link to="/bottle-labels" style={{ color: 'black' }}>
                        <p>Bottle Labels</p>
                      </Link>
                    </div>
                    <div className="slide_need">
                      <img
                        className="one_image_need"
                        src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fclear.pngTue%20Aug%2022%202023%2019%3A03%3A17%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ae61b56c-14a8-436e-8fc7-06bbb92efc78"
                        alt="Clear Labels"
                      />
                      <Link to="/clear-labels" style={{ color: 'black' }}>
                        <p>Clear Labels</p>
                      </Link>
                    </div>
                    <div className="slide_need">
                      <img
                        className="one_image_need"
                        src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fcustom%20labels.pngTue%20Aug%2022%202023%2019%3A04%3A23%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=c80afc7c-0a63-441a-849b-2a8686124e2d"
                        alt="Custom Labels"
                      />
                      <Link to="/custom-labels" style={{ color: 'black' }}>
                        <p>Custom Labels</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-stickerabout">
            <div className="left_section">
              <h2>Need Help with Sticker Design?</h2>
              <p>Work with a professional designer to create a one-of-a-kind design for you</p>
              <div className="button">
                <Link to="/Contacts">
                  <button>Get in touch</button>
                </Link>
              </div>
            </div>
            <div className="right_section">
              <img
                loading="lazy"
                width="1020"
                height="794"
                decoding="async"
                data-nimg="1"
                src={Laptop}
                alt="Laptop"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sticker;