import React from "react";
import Package from '../assets/www.biotechpackages.com/images/package.webp'
import S from '../assets/www.biotechpackages.com/images/s.png'
import Ayra from '../assets/www.biotechpackages.com/Biotech.mp4'
import Icon8 from '../assets/www.biotechpackages.com/images/icons/icons8-menu.svg'
import Right from '../assets/www.biotechpackages.com/images/icons/right.png'
import Miximg from '../assets/www.biotechpackages.com/images/mix_img.png'
import { Link } from "react-router-dom";

const Customs = () => {
  return (
    <>
      <div className="main_subservicebanner index1">

        <div className="subservice_banner">

          <img
            alt="banner"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="subservice_banner_image"
            src={Package}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
              objectFit: 'cover',
              objectPosition: 'center center',
              color: 'transparent'
            }}
          />
        </div>

        <div className="subservice_banner_data">

          <div className="subservice_content">

            <h2>Packaging</h2>
            <p>Design and order a wide range of fully customizable packaging products for your brand</p>
          </div>

        </div>

      </div>




      <div>

        <div class="main_shopboxx">

          <div class="main_section_package_pack">

            <div name="myScrollToElement">

            </div>

            <h3 id="myScrollToElement2" class="subservicepack_head">
              Shop Custom Boxes</h3>
            <p class="subservicepack_para" style={{ maxWidth: '500px', marginBottom: '10px', minHeight: '65px' }}> A wide range of cardboard postage, product and mailing boxes suitable for various industries. </p>
            <div class="ham_icons1">

              <img src={Icon8} alt="Hamburger Icon" />
            </div>

            <div class="packaging_butn">

              <button type="button" class="package_btn btn btn-primary">

                <Link to="tel:923103330109" style={{ color: 'white', textTransform: 'uppercase' }}>
                  Packaging Consultant</Link>

              </button>
            </div>

          </div>

          <div class="container">

            <div class="pack_package">

              <div class="main_sidemenu">

                <h1 class="top_category">
                  Category</h1>
                <hr />
                <div class="Faq_section">

                  <div>
                    <div class="faq_question1">
                      <div>
                        <div class="acordianss change_bg">
                          <h5 style={{ fontWeight: ' 600' }}>Custom Boxes</h5><div class="icon_style1 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para1">
                        <Link to="/advertising-boxes">
                          <p>Advertising Boxes</p></Link>
                        <Link to="/bath-bomb-boxes">
                          <p>Bath Bomb Boxes</p></Link>
                        <Link to="/box-with-window">
                          <p>Box With Window</p></Link>
                        <Link to="/candle-boxes">
                          <p>Candle Boxes</p></Link>
                        <Link to="/card-deck-boxes">
                          <p>Card Deck Boxes</p></Link>
                        <Link to="/clothing-boxes">
                          <p>Clothing Boxes</p></Link>
                        <Link to="/dispenser-boxes">
                          <p>Dispenser Boxes</p></Link>
                        <Link to="/gift-boxes">
                          <p>Gift Boxes</p></Link>
                        <Link to="/hair-extension-boxes">
                          <p>Hair Extension Boxes</p></Link>
                        <Link to="/pillow-boxes">
                          <p>Pillow Boxes</p></Link>
                        <Link to="/pr-boxes">
                          <p>PR Boxes</p></Link>
                        <Link to="/rigid-boxes">
                          <p>Rigid Boxes</p></Link>
                        <Link to="/shoe-boxes">
                          <p>Shoe Boxes</p></Link>
                        <Link to="/sleeve-boxes">
                          <p>Sleeve Boxes</p></Link>
                        <Link to="/soap-boxes">
                          <p>Soap Boxes</p></Link>
                        <Link to="/tuck-boxes">
                          <p>Tuck Boxes</p></Link>
                        <Link to="/gable-boxes">
                          <p>Gable Boxes</p></Link>
                        <Link to="/mailer-boxes">
                          <p>Mailer Boxes</p></Link>
                        <Link to="/custom-boxes">
                          <p>Custom Boxes</p></Link>
                        <Link to="/cardboard-boxes">
                          <p>Cardboard Boxes</p></Link>
                        <Link to="/hard-boxes">
                          <p>Hard Boxes</p></Link>
                        <Link to="/medicine-boxes">
                          <p>Medicine Boxes</p></Link>
                      </div>
                      {/* <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Cosmetic Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div> */}
                      {/* <div class="SubMenu para">
                        <Link to="/compact-boxes">
                          <p>Compact Boxes</p></Link>
                        <Link to="/contact-lens-boxes">
                          <p>Contact Lens Boxes</p></Link>
                        <Link to="/cosmetics-boxes">
                          <p>Cosmetics Boxes</p></Link>
                        <Link to="/eyeliner-boxes">
                          <p>Eyeliner Boxes</p></Link>
                        <Link to="/eyeshadow-boxes">
                          <p>Eyeshadow Boxes</p></Link>
                        <Link to="/foundation-boxes">
                          <p>Foundation Boxes</p></Link>
                        <Link to="/hair-spray-boxes">
                          <p>Hair Spray Boxes</p></Link>
                        <Link to="/lip-balm-boxes">
                          <p>Lip Balm Boxes</p></Link>
                        <Link to="/lip-gloss-boxes">
                          <p>Lip Gloss Boxes</p></Link>
                        <Link to="/lipstick-boxes">
                          <p>Lipstick Boxes</p></Link>
                        <Link to="/lotion-boxes">
                          <p>Lotion Boxes</p></Link>
                        <Link to="/makeup-boxes">
                          <p>Makeup Boxes</p></Link>
                        <Link to="/mascara-boxes">
                          <p>Mascara Boxes</p></Link>
                        <Link to="/nail-polish-boxes">
                          <p>Nail Polish Boxes</p></Link>
                        <Link to="/perfume-boxes">
                          <p>Perfume Boxes</p></Link>
                        <Link to="/counter-display-boxes">
                          <p>Counter Display Boxes</p></Link>
                        <Link to="/cream-boxes">
                          <p>Cream Boxes</p></Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Display Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <Link to="/4-corner-display-Boxes">
                          <p>4 Corner Display Boxes</p></Link>
                        <Link to="/cosmetics-display-boxes">
                          <p>Cosmetics Display Boxes</p></Link>
                        <Link to="/display-boxes">
                          <p>Display Boxes</p></Link>
                        <Link to="/pop-counter-display-tray">
                          <p>Pop Counter Display Tray</p></Link>
                        <Link to="/side-lock-tuck-top-display-boxes">
                          <p>Side Lock Tuck Top Display Boxes</p></Link>
                      </div>
                      <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Food &amp; Beverages</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <Link to="/bakery-boxes">
                          <p>Bakery Boxes</p></Link>
                        <Link to="/cake-boxes">
                          <p>Cake Boxes</p></Link>
                        <Link to="/candy-boxes">
                          <p>Candy Boxes</p></Link>
                        <Link to="/chocolate-boxes">
                          <p>Chocolate Boxes</p></Link>
                        <Link to="/cupcake-boxes">
                          <p>Cupcake Boxes</p></Link>
                        <Link to="/burger-boxes">
                          <p>Burger Boxes</p></Link>
                        <Link to="/pizza-boxes">
                          <p>Pizza Boxes</p></Link>
                        <Link to="/popcorn-boxes">
                          <p>Popcorn Boxes</p></Link>
                        <Link to="/tea-boxes">
                          <p>Tea Boxes</p></Link>
                        <Link to="/dessert-boxes">
                          <p>Dessert Boxes</p></Link>
                        <Link to="/noodle-boxes">
                          <p>Noodle Boxes</p></Link>
                        <Link to="/pie-boxes">
                          <p>Pie Boxes</p></Link>
                        <Link to="/cereal-boxes">
                          <p>Cereal Boxes</p></Link>
                        <Link to="/beverages-boxes">
                          <p>Beverages Boxes</p></Link>
                        <Link to="/donut-boxes">
                          <p>Donut Boxes</p></Link>
                        <Link to="/food-boxes">
                          <p>Food Boxes</p></Link>
                      </div>
                      <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Metalized Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <Link to="/glitter-boxes">
                          <p>Glitter Boxes</p></Link>
                        <Link to="/gold-foil-boxes">
                          <p>Gold Foil Boxes</p></Link>
                        <Link to="/holographic-foiling-boxes">
                          <p>Holographic Foiling Boxes</p></Link>
                        <Link to="/silver-foil-boxes">
                          <p>Silver Foil Boxes</p></Link>
                        <Link to="/textured-boxes">
                          <p>Textured Boxes</p></Link>
                        <Link to="/metalized-boxes">
                          <p>Metalized Boxes</p></Link>
                        <Link to="/hologram-boxes">
                          <p>Hologram Boxes</p></Link>
                      </div>
                      <div>
                        <div class="acordianss ">
                          <h5 style={{ fontWeight: ' 600' }}>Rigid Boxes</h5><div class="icon_style2 ">
                            <img loading="lazy" decoding="async" data-nimg="fill" class="arrow_ico" src={Right} style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', objectPosition: 'center center', color: 'transparent' }} /></div>
                        </div>
                      </div>
                      <div class="SubMenu para">
                        <Link to="/book-style">
                          <p>Book Style</p></Link>
                        <Link to="/cell-phone-accessories-boxes">
                          <p>Cell Phone Accessories Boxes</p></Link>
                        <Link to="/collapsible-foldable-boxes">
                          <p>Collapsible - Foldable Boxes</p></Link>
                        <Link to="/cufflink-boxes">
                          <p>Cufflink Boxes</p></Link>
                        <Link to="/custom-shape-boxes">
                          <p>Custom Shape Boxes</p></Link>
                        <Link to="/headphone-boxes">
                          <p>Headphone Boxes</p></Link>
                        <Link to="/jewelry-boxes">
                          <p>Jewelry Boxes</p></Link>
                        <Link to="/one-piece-rigid-boxes">
                          <p>One Piece Rigid Boxes</p></Link>
                        <Link to="/tie-boxes">
                          <p>Tie Boxes</p></Link>
                        <Link to="/torch-boxes">
                          <p>Torch Boxes</p></Link>
                        <Link to="/two-pieces-rigid-boxes">
                          <p>Two Pieces Rigid Boxes</p></Link>
                        <Link to="/wallet-boxes">
                          <p>Wallet Boxes</p></Link>
                        <Link to="/watch-boxes">
                          <p>Watch Boxes</p></Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div class="shop_need">
                  <h3 class="top_categoryy">
                    Shop by Need</h3><hr /><Link to="/packaging-tapes" style={{ color: 'black' }}>
                    <p>Packaging Tapes</p></Link>
                  <Link to="/tissue-boxes" style={{ color: 'black' }}>
                    <p>Tissue Boxes</p></Link>
                </div> */}
              </div>
              <div style={{ width: '100%' }}>
                <div class="main_products_packag">
                  <div class="main_products_packag2">
                    <Link to="/advertising-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Advertising Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FAdvertising%20Box.pngFri%20Jun%2002%202023%2016%3A14%3A39%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=20511018-e1e9-4105-8a88-ebe2e21768dd" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Advertising Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/bath-bomb-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Bath Bomb Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBath%20Bomb%20Packaging.pngFri%20Jun%2002%202023%2016%3A20%3A27%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=e595a533-dfd3-43a1-832d-8a7512970854" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Bath Bomb Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/box-with-window" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Box With Window" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBox%20With%20Window.pngFri%20Jun%2002%202023%2016%3A23%3A22%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=639e8e1a-015f-40c2-90cb-28da3b2a1a98" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Box With Window</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/candle-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Candle Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FCandle%20Box.pngFri%20Jun%2002%202023%2016%3A25%3A11%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=9a1f401c-c084-4c83-9354-226b3962cb74" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Candle Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/card-deck-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Card Deck Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FCard%20Deck%20Box.pngFri%20Jun%2002%202023%2016%3A26%3A49%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=5bbffff2-1615-4314-b271-658d6226be77" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Card Deck Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/clothing-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Clothing Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FClothing%20Packaging.pngFri%20Jun%2002%202023%2016%3A28%3A43%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=b34df4c4-7ae4-445b-a79b-a15a9dfde2a5" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Clothing Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/dispenser-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Dispenser Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FDispenser%20Box.pngFri%20Jun%2002%202023%2016%3A32%3A17%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=46fafbbd-78f6-40ca-933c-647b79d9bffb" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Dispenser Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/gift-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Gift Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FGift%20Box.pngFri%20Jun%2002%202023%2016%3A42%3A40%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=7a20977e-f3c1-45fc-bb79-d53bffca03e4" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Gift Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/hair-extension-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Hair Extension Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FHair%20Extention%20Box.pngFri%20Jun%2002%202023%2016%3A47%3A52%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ce94b3eb-00e7-48d5-a59a-e98e3a6d26d4" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Hair Extension Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/pillow-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Pillow Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FPillow%20Box.pngFri%20Jun%2002%202023%2016%3A50%3A35%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=49d7e08b-3393-4b6d-99d0-594428f1aced" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Pillow Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/pr-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="PR Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FPR%20Box.pngFri%20Jun%2002%202023%2016%3A56%3A28%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=68da7b31-88ba-43b1-a55c-3d368c90d913" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>PR Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/rigid-boxes" style={{ color: 'black' }}>
                      <div class="bottom">
                        <div class="head_and_imagge">
                          <div class="image">
                            <img alt="Rigid Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FRigid%20Box.pngFri%20Jun%2002%202023%2017%3A56%3A40%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=f12bea7d-f783-4fae-b11c-0701d00febef" /></div>
                          <div class="head" style={{ maxWidth: '322px' }}>
                            <h3>Rigid Boxes</h3></div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/shoe-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Shoe Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2Fshoe%20box.pngFri%20Jun%2002%202023%2017%3A59%3A29%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=9c76bb6f-180b-43a3-b4f6-a5280e75452b"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Shoe Boxes</h3></div></div></div></Link>
                    <Link to="/sleeve-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Sleeve Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FSleeve%20Box.pngFri%20Jun%2002%202023%2018%3A01%3A50%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=6c74b8ef-31a8-4c51-81d9-85f8d2f23402"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Sleeve Boxes</h3></div></div></div></Link>
                    <Link to="/soap-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Soap Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FSoap%20Box.pngFri%20Jun%2002%202023%2018%3A04%3A44%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ca3483d1-e0bf-42e2-a208-66c2dc5ba717"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Soap Boxes</h3></div></div></div></Link>
                    <Link to="/tuck-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Tuck Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FTuck%20Box.pngFri%20Jun%2002%202023%2018%3A06%3A26%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=34ac0e4c-0571-48b6-9e52-0a2bdf6d250f"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Tuck Boxes</h3></div></div></div></Link>
                    <Link to="/gable-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Gable Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2Fgable-packaging-boxes.pngTue%20Aug%2029%202023%2006%3A54%3A51%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=6498f5e5-bc7e-4c25-92f1-b6763a746dfa"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Gable Boxes</h3></div></div></div></Link>
                    <Link to="/mailer-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Mailer Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FAugust_2023%2FMailer-Boxes.pngFri%20Aug%2025%202023%2019%3A46%3A05%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=fe7cf009-5eaf-4c27-a4c8-ce5aaf08e5c2"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Mailer Boxes</h3></div></div></div></Link>
                    <Link to="/custom-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Custom Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2Fcustom-printed-boxes.pngFri%20Sep%2001%202023%2007%3A37%3A18%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=34942769-0449-45e0-a4b5-9fdf982a6e90"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Custom Boxes</h3></div></div></div></Link>
                    <Link to="/cardboard-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Cardboard Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FSeptember_2023%2FCollection%20pages.pngFri%20Sep%2022%202023%2005%3A11%3A01%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=348814f2-df0c-4c3a-9078-a80debfddee1"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Cardboard Boxes</h3></div></div></div></Link>
                    <Link to="/hard-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Hard Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FOctober_2023%2Fhard%20box.pngMon%20Oct%2009%202023%2003%3A24%3A09%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=440a80b3-d819-4b1b-a097-a49ee3e02815"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Hard Boxes</h3></div></div></div></Link>
                    /<Link to="/medicine-boxes" style={{color: 'black'}}><div class="bottom"><div class="head_and_imagge"><div class="image"><img alt="Medicine Boxes" class="" decoding="async" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FOctober_2023%2Fmedicine%20box.pngMon%20Oct%2009%202023%2003%3A28%3A14%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=28831e19-a8b0-4ace-84aa-b2a1811f937d"/></div><div class="head" style={{maxWidth: '322px'}}><h3>Medicine Boxes</h3></div></div></div></Link>
                  </div>
                </div>
                {/* <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <ul class="ant-pagination css-yp8pcc">
                    <li title="Previous Page" class="ant-pagination-prev ant-pagination-disabled" aria-disabled="true">
                      <button class="ant-pagination-item-link" type="button" tabindex="-1" disabled="">
                        <span role="img" aria-label="left" class="anticon anticon-left">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li title="1" class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active" tabindex="0">
                      <Link rel="nofollow">
                        1</Link>
                    </li><li title="2" class="ant-pagination-item ant-pagination-item-2" tabindex="0">
                      <Link rel="nofollow">
                        2</Link>
                    </li><li title="Next Page" tabindex="0" class="ant-pagination-next" aria-disabled="false">
                      <button class="ant-pagination-item-link" type="button" tabindex="-1">
                        <span role="img" aria-label="right" class="anticon anticon-right">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <img src={Miximg} alt="" style={{ width: '100%', margin: 'auto' }} />
          </div>
          <div>
            <div class="main_sidemenus  hidden1">
              <div class="container">
                <div class="main_close_icon">
                  <img loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="close_icon" src="/images/closee.svg" style={{ color: 'transparent' }} /></div>
                <h2 class="top_category">
                  Category</h2><hr /><div class="Faq_section">
                  <div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperr">
                            Custom Boxes</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Cosmetic Boxes</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Display Boxes</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Food &amp; Beverages</h3></div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Metalized Boxes</h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="faq_question1">
                        <div class="accordianss">
                          <h3 class="custom_box_upperrs">
                            Rigid Boxes</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shop_need">
                  <h3 class="top_categoryy">
                    Shop by Need</h3><hr /><Link to="/packaging-tapes" style={{ color: 'black' }}>
                    <p>Packaging Tapes</p></Link>
                  <Link to="/tissue-boxes" style={{ color: 'black' }}>
                    <p>Tissue Boxes</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container">
          <div class="main_shop_by_need">
            <div class="main_need">
              <h2>Shop by Need</h2>
              <div class="need_section">
                <div class="slide_need">
                  <img class="one_image_need" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FAdvertising%20Box.pngFri%20Jun%2002%202023%2016%3A14%3A39%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=20511018-e1e9-4105-8a88-ebe2e21768dd" />
                  <Link to="/advertising-boxes" style={{ color: 'black' }}>
                    <p>Advertising Boxes</p>
                  </Link>
                </div>
                <div class="slide_need">
                  <img class="one_image_need" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBath%20Bomb%20Packaging.pngFri%20Jun%2002%202023%2016%3A20%3A27%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=e595a533-dfd3-43a1-832d-8a7512970854" />
                  <Link to="/bath-bomb-boxes" style={{ color: 'black' }}>
                    <p>Bath Bomb Boxes</p>
                  </Link>
                </div>
                <div class="slide_need">
                  <img class="one_image_need" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-image%2FJune_2023%2FBox%20With%20Window.pngFri%20Jun%2002%202023%2016%3A23%3A22%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=639e8e1a-015f-40c2-90cb-28da3b2a1a98" />
                  <Link to="/box-with-window" style={{ color: 'black' }}>
                    <p>Box With Window</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute' }}>
        <img src={S} alt="" style={{ width: '100%', margin: 'auto' }} />
      </div>
      <div className="main_storeproduct_video">
        <video autoplay="" loop="true" __idm_id__="483330" style={{ width: '100%', overflow: 'hidden' }}>
          <source src={Ayra} type="video/mp4" style={{ width: '100%', overflow: 'hidden' }} /></video>
      </div>
    </>
  );
};

export default Customs;
