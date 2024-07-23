import React from 'react'
import banner from "../assets/www.biotechpackages.com/images/banner.png";
import disk from "../assets/www.biotechpackages.com/images/disk.png";
import { Link } from 'react-router-dom';

const carousel = () => {
    return (
        <>
            <div class="main-banner">
                <div class="banner-img">
                    <img
                        alt="background image"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        src={banner}
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            objectFit: "cover",
                            objectPosition: "center center",
                        }}
                    />
                </div>


                <div class="banner_datass">
                    <div class="banner-data">
                        <h2>
                            Packaging solution for <br />
                            every <span>product</span>
                        </h2>
                        <p>Everything is designed but few things are designed well</p>
                        <Link to="/quote">
                            <button type="button" class="btn btn-primary">
                                GET A QUOTE
                            </button>
                        </Link>
                    </div>
                    <div class="main_bottom">
                        <div
                            id="bannerCarousel"
                            class="banner-carousel carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="2000"
                        >
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="0"
                                    aria-label="Slide 1"
                                    class="active"
                                    aria-current="true"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="3"
                                    aria-label="Slide 4"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="4"
                                    aria-label="Slide 5"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="5"
                                    aria-label="Slide 6"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="6"
                                    aria-label="Slide 7"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="7"
                                    aria-label="Slide 8"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="8"
                                    aria-label="Slide 9"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#bannerCarousel"
                                    data-bs-slide-to="9"
                                    aria-label="Slide 10"
                                ></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FAugust_2023%2F1.webpTue%20Aug%2029%202023%2005%3A50%3A18%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=f11a3abd-59d6-4445-a585-4f1bd87eb7d4"
                                            alt="Slide 0"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FAugust_2023%2F2.webpTue%20Aug%2029%202023%2005%3A50%3A34%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=ab5533f7-cc1b-474a-a610-d4f2a1616b7a"
                                            alt="Slide 1"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FAugust_2023%2F3.webpTue%20Aug%2029%202023%2005%3A50%3A45%20GMT-0700%20(Pacific%20Daylight%20Time)?alt=media&amp;token=f518f576-1cce-49c6-bbef-98b3ef49d60a"
                                            alt="Slide 2"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2F1%20copy.webpMon%20Sep%2025%202023%2020%3A44%3A33%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=ef30763e-e5c4-481c-a31e-a5963e6c6faa"
                                            alt="Slide 3"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2F2.webpTue%20Sep%2019%202023%2015%3A44%3A04%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=8c8ad02f-0f45-44a4-a75c-2f3618cdffe3"
                                            alt="Slide 4"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2F3.webpTue%20Sep%2019%202023%2015%3A44%3A25%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=7916182d-353e-4903-a832-2b048ae33e72"
                                            alt="Slide 5"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2F4.webpTue%20Sep%2019%202023%2015%3A47%3A25%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=00b57926-669b-40ee-96a5-8fea6fc523c6"
                                            alt="Slide 6"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2F3.webpMon%20Sep%2025%202023%2020%3A38%3A14%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=5b6bdd11-a90e-4863-99ca-7677dc00b0b8"
                                            alt="Slide 7"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2F2.webpMon%20Sep%2025%202023%2020%3A38%3A41%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=095eaaa4-2548-4d1d-8783-aa46b287a401"
                                            alt="Slide 8"
                                        />
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="img_div">
                                        <img
                                            class="d-block image_adjust"
                                            src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/service-image%2FSeptember_2023%2FGroup.webpMon%20Sep%2025%202023%2020%3A41%3A24%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=97e66785-0e33-4017-9a13-e78c743115ae"
                                            alt="Slide 9"
                                        />
                                    </div>
                                </div>
                            </div>
                            <a
                                class="carousel-control-prev"
                                href="#bannerCarousel"
                                role="button"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a
                                class="carousel-control-next"
                                href="#bannerCarousel"
                                role="button"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>

                    <div class="disk_img">
                        <img
                            alt="product-image"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            class="three"
                            src={disk}
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                objectFit: "cover",
                                objectPosition: "center center",
                                color: "transparent",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default carousel
