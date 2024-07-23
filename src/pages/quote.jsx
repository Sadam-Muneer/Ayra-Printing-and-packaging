import React from 'react'
import Quote1 from '../assets/www.biotechpackages.com/images/quote1.webp'
import Quote2 from '../assets/www.biotechpackages.com/images/quote2.webp'
import Correct from '../assets/www.biotechpackages.com/images/correct.png'

const quote = () => {
    return (
        <>
        <main>
        <div class="main_quotes">
                <div class="main_data">
                    <h2>Get A Custom Quote</h2>
                    <span>After filling this form our representative will contact you in short while</span>
                    <div class="main_section">
                        <h3 class="quote_main">Quote Info</h3>
                        <div class="main_quote_form">
                            <form>
                                <div class="top_fields">
                                    <div class="form_input">
                                        <label>Name <span style={{ color: 'red', paddingLeft: '10px' }}></span></label>
                                        <input name="name" placeholder="Enter your name" value="" />
                                    </div>
                                    <div class="form_input">
                                        <label>Email <span style={{ color: 'red', paddingLeft: '10px' }}></span></label>
                                        <input name="email" placeholder="Enter your email address" value="" />
                                    </div>
                                    <div class="form_input">
                                        <label>Phone No. <span style={{ color: 'red', paddingLeft: '10px' }}></span></label>
                                        <input name="phone" type="number" placeholder="Enter your phone number" value="" />
                                    </div>
                                </div>
                                <div class="choose_products">
                                    <h4>Choose your Product</h4>
                                    <div class="two_cate">
                                        <div class="box1">
                                            <img class="img1" src={Quote1} />
                                        </div><div class="box1">
                                            <img class="img1" src={Quote2} />
                                        </div>
                                        <div class="tick_icon"><img loading="lazy" width="23" height="23" decoding="async" data-nimg="1" src={Correct} style={{color: 'transparent'}}/></div>
                                    </div>
                                    <div class="custom_select">
                                        <div class="custom_select_option">
                                            <div>
                                                <span style={{ color: 'red', paddingTop: '10px', fontWeight: '600' }}></span>
                                                <span style={{ color: 'red', paddingTop: '10px', fontWeight: '600' }}></span>
                                            </div>
                                            <select disabled="" style={{ cursor: 'default' }}>
                                                <option hidden="">Select your product type</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="special_requirements">
                                    <h4>Special Requirement</h4>
                                    <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                                        <span style={{color: 'red', fontWeight: '600'}}></span>
                                    </div>
                                    <textarea name="requirements" placeholder="Please provide any special requirement about your product:"></textarea>
                                </div>
                                <button class="butns" type="submit">GET QUOTE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
            
        </>
    )
}

export default quote;