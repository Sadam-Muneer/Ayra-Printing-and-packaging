import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/www.biotechpackages.com/images/search.png';
import logo from '../assets/www.biotechpackages.com/logo.png';
import blackarrow from '../assets/www.biotechpackages.com/images/blackarrow.png';
import menuIcon from '../assets/www.biotechpackages.com/images/icons/menu.png';
// import bLogo from '../assets/www.biotechpackages.com/images/B_logo.png';
import cross from '../assets/www.biotechpackages.com/images/icons/cross.png';
import FB from '../assets/www.biotechpackages.com/images/icons/fb.png';
import insta from '../assets/www.biotechpackages.com/images/icons/insta.png';
import linked from '../assets/www.biotechpackages.com/images/icons/linked.png';
import question from '../assets/www.biotechpackages.com/images/icons/question.svg'
// import './styles.css'; // Make sure to include your CSS file

function Navbar({ componentName }) {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [linkColor, setLinkColor] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    // alert('hello')
    setLinkColor(componentName === 'test' ? 'red !important' : 'white')
    // const linkColor = componentName === 'test' ? 'red' : 'white';
    console.log(`Component name is: ${componentName}`);
  }, [componentName]);

  const handleCall = () => {
    window.location.href = "tel:+923467133632";
  };

  return (
    <>
      <div className="main_headers">
        <div className="main_data">
          <div className="main_header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <div className="main_header_com">
                  <Link to="/">
                    <img
                      loading="lazy"
                      width="114"
                      height="85"
                      decoding="async"
                      className="logo"
                      src={logo}
                      alt="logo"
                      style={{ color: 'transparent', width: '100%' }}
                    />
                  </Link>
                  <button
                    aria-controls="navbarScroll"
                    type="button"
                    aria-label="Toggle navigation"
                    className="navbar-toggler collapsed"
                    onClick={toggleSidebar}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="navbar-collapse collapse" id="navbarScroll">
                    <div
                      className="m-auto my-2 my-lg-0 navbar-nav navbar-nav-scroll"
                      style={{ maxHeight: '100px' }}
                    >
                      <Link className="non_active" to="/Custom" style={{ color: linkColor }}>
                        Custom Packaging
                      </Link>
                      <Link className="non_active" to="/Sticker" style={{ color: linkColor }}>
                        Stickers &amp; Labels
                      </Link>
                      <Link className="non_active" to="/About" style={{ color: linkColor }}>
                        About
                      </Link>
                      <Link className="non_active" to="/Career" style={{ color: linkColor }}>
                        Careers
                      </Link>
                      <Link className="non_active" to="/Contacts" style={{ color: linkColor }}>
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div className="search_fields">
                    {/* <div className="search_icon">
                      <img
                        alt="search"
                        loading="lazy"
                        width="30"
                        height="30"
                        decoding="async"
                        src={searchIcon}
                        style={{ color: 'transparent' }}
                      />
                    </div> */}
                    
                    <Link to="https://api.whatsapp.com/send?phone=+923467133632&amp;text=Salam.">
                      <button type="button" className="call_us btn btn-primary" onClick={handleCall}>
                        Contact Us
                      </button>
                    </Link>
                 

                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* <div className="hide">
            <div className="hover_search">
              <div className="container">
                <div className="search_item">
                  <div className="search_main">
                    <input
                      type="text"
                      placeholder="Search your product"
                      value=""
                    />
                    <img
                      alt="search"
                      loading="lazy"
                      width="55"
                      height="55"
                      decoding="async"
                      src={blackarrow}
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div className="srach_data" style={{ display: 'flex' }}></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="container">
          <div className="responsive_header index1">
            <div className="topbar">
              <div className="logo">
                <Link to="/">
                  <img
                    alt="logo"
                    loading="lazy"
                    width="64"
                    height="48"
                    decoding="async"
                    src={logo}
                    style={{ color: 'transparent' }}
                  />
                </Link>
              </div>
              <div className="icons">
                {/* <div>
                  <img
                    alt="search"
                    loading="lazy"
                    width="27"
                    height="27"
                    decoding="async"
                    src={searchIcon}
                    style={{ color: 'transparent' }}
                  />
                </div> */}
                <div onClick={toggleSidebar}>
                  <img
                    alt="menu"
                    loading="lazy"
                    width="27"
                    height="16"
                    decoding="async"
                    src={menuIcon}
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hide_res">
          <div className="hover_search2">
            <div className="container">
              <div className="search_item">
                <div className="search_main">
                  <input
                    type="text"
                    placeholder="Search your product"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hide_res2">
          <div className="topbar topbar3">
            <div className="logo"></div>
            <div className="icons">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="hover_search3">
            <div className="search_item">
              <div className="container">
                <input
                  type="text"
                  placeholder="Search your product"
                  value=""
                />
                <img
                  alt="search"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  src={blackarrow}
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile_navigation ${isSidebarOpen ? '' : 'hidden'}`}>
          <div>
            <div className="topbar topbar3">
              <div className="logo">
                <Link to="/">
                  <img
                    alt="logo"
                    loading="lazy"
                    width="64"
                    height="48"
                    decoding="async"
                    src={logo}
                    style={{ color: 'transparent' }}
                  />
                </Link>
              </div>
              <div className="icons" onClick={toggleSidebar}>
                <div>
                  <img
                    alt="menu"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    src={cross}
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
            </div>
            <div className="menuss">
              <div>
                <h4>
                  Need Help
                  <span>
                    <img
                      alt=""
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      src={question}
                      style={{ color: 'transparent', marginLeft: '5px' }}
                    />
                  </span>
                </h4>
                <hr />
                <ul>
                  <Link className="non_active" to="/Custom">
                    Custom Packaging
                  </Link>
                  <Link className="non_active" to="/Sticker">
                    Stickers &amp; Labels
                  </Link>
                  <Link className="non_active" to="/About">
                    About
                  </Link>
                  <Link className="non_active" to="/Career">
                    Careers
                  </Link>
                  <Link className="non_active" to="/Contact">
                    Contact
                  </Link>
                </ul>
                <hr />
              </div>
              <div className="Quick_links">
                <h4>Quick Links</h4>
                <div>
                  <div className="Links">
                  <Link className="non_active" to="/Custom">
                    <h3>Packaging</h3>
                    </Link>
                    <Link className="non_active" to="/Sticker">
                    <h3>Stickers</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="social_links">
                <div className="social_icons">
                  <Link to="https://www.facebook.com/ayraprintnpack">
                    <div className="icons_fb">
                      <img
                        alt="fb_icon"
                        loading="lazy"
                        width="9.28"
                        height="17.24"
                        decoding="async"
                        src={FB}
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="icons_insta">
                      <img
                        alt="insta_icon"
                        loading="lazy"
                        width="17.28"
                        height="19.24"
                        decoding="async"
                        src={insta}
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </Link>
                  {/* <Link to="#">
                    <div className="icons_linked">
                      <img
                        alt="linkedIn_icon"
                        loading="lazy"
                        width="12.84"
                        height="12.84"
                        decoding="async"
                        src={linked}
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
