import React from 'react'
import App from '../assets/www.biotechpackages.com/images/icons/app.png'
import mixImg from '../assets/www.biotechpackages.com/images/icons/mix_img.png'
import mix1 from '../assets/www.biotechpackages.com/images/icons/mix1.png'
import mix2 from '../assets/www.biotechpackages.com/images/icons/mix2.png'
import Career1 from '../assets/www.biotechpackages.com/images/career1.png'
import Career2 from '../assets/www.biotechpackages.com/images/career2.png'
import Career3 from '../assets/www.biotechpackages.com/images/career3.png'
import Career4 from '../assets/www.biotechpackages.com/images/career4.png'
import Career5 from '../assets/www.biotechpackages.com/images/career5.png'
import Career6 from '../assets/www.biotechpackages.com/images/career6.png'
import Career7 from '../assets/www.biotechpackages.com/images/career7.png'
import Career8 from '../assets/www.biotechpackages.com/images/career8.png'
import Different from '../assets/www.biotechpackages.com/images/Different.jpg'
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <>
      <div>
        <div className="banner">
          <div className="banner_image">
            <img className="image" src={App} alt="" layout="fill" objectfit="cover" objectposition="center" />
          </div>
          <div className="banner_data">
            <div className="banner_contennt">
              <h4>Careers</h4>
              <p>We empower our team to take on the most inspiring challenges of their working lives</p>
            </div>
          </div>
        </div>
      </div>

      <div class="main_vacancy">
        <div class="container">
          <div class="heading">
            <h2>CURRENT VACANCIES </h2>
          </div>
          <div class="main_div">
            <div class="main_card">
              <div class="card_data">
                <h5> <span style={{ fontWeight: '600' }}>Location </span> : Multan, Pakistan</h5>
                <h2>Graphic Designer</h2>
                <div class="title">
                  <p>
                    <span style={{ fontWeight: '600' }}>No. of Position </span>: 2 </p>
                  <p> <span style={{ fontWeight: '600' }}>Job Type </span>: Full Time</p>
                </div>
                <div class="vacancy_image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/vacancy-image%2Ffire1%2FSeptember_2023%2FLink%20building.png?alt=media&amp;token=6e3be512-594e-4e66-a3ad-0e2c5677ca96" alt="" />
                  <Link to="/Graphic-Designer">
                    <div class="read_more_button">Apply Now</div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="main_card">
              <div class="card_data">
                <h5> <span style={{ fontWeight: '600' }}>Location </span> : Multan, Pakistan</h5>
                <h2>Producton Staff</h2>
                <div class="title">
                  <p>
                    <span style={{ fontWeight: '600' }}>No. of Position </span>: 3 </p>
                  <p> <span style={{ fontWeight: '600' }}>Job Type </span>: Full Time</p>
                </div>
                <div class="vacancy_image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/vacancy-image%2Ffire1%2FSeptember_2023%2Fcontent%20writer.png?alt=media&amp;token=9329a4f9-4442-478b-b354-ca0d1fc3979e" alt="" />
                  <Link to="/Production-Staff">
                    <div class="read_more_button">Apply Now</div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="main_card">
              <div class="card_data">
                <h5> <span style={{ fontWeight: '600' }}>Location </span> : Multan, Pakistan</h5>
                <h2>Accountant</h2>
                <div class="title">
                  <p><span style={{ fontWeight: '600' }}>No. of Position  </span>: 1 </p>
                  <p> <span style={{ fontWeight: '600' }}>Job Type </span>: Full Time</p>
                </div>
                <div class="vacancy_image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/vacancy-image%2Ffire1%2FJuly_2023%2FRectangle%20218.png?alt=media&amp;token=6b3705e0-df0d-4083-8edf-d92ebf75fe11" alt="" />
                  <Link to="/Accountant">
                    <div class="read_more_button">Apply Now</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={mixImg} alt="" style={{ width: '100%', margin: 'auto', paddingTop: '10px' }} />
        </div>
      </div>

      <div class="main_role">
        <div class="container">
          <div class="role_data">
            <h2>Can't see the role for you</h2>
            <p>We’re always looking for shiny new talent to join the Ayra Packages and would love to hear from you! Send over your CV to <Link to="mailto:ayraprintandpackaging@gmail.com" style={{ color: 'black' }}>ayraprintandpackaging@gmail.com</Link> and who knows where it might lead.</p>
          </div>
        </div>
        <div>
          <img src={mix1} alt="" style={{ width: '100%', margin: 'auto' }} />
        </div>
      </div>


      <div class="main_benifit">
        <div class="container">
          <div class="heading">
            <h2>Our Benefits</h2>
          </div>
          <div class="second_section">
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career1} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Annual Leave</h4>
                <p>Get at least 12 days of paid time off every year</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career2} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Health &amp; Wellbeing</h4>
                <p>Happy &amp; Healthy go hand-in-hand, we're here for that.</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career3} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Holidays</h4>
                <p>We give you down time, adventure time, or anything in between that time.</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career4} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Mentoring</h4>
                <p>Providing a learning relationship between an experienced person and you.</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career5} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Refreshments</h4>
                <p>Like we say in Spain, “Hunger is a bad advisor,” so we have a good variety of ways to fight it off.</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career6} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Career Path Planning</h4>
                <p>A personalized roadmap designed to help you to achieve professional goals.</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career7} alt="" />
                <h4 style={{ paddingTop: '20px' }}>Flexible Working Hours</h4>
                <p>Our schedule is semi-flexible, giving you more freedom at work.</p>
              </div>
            </div>
            <div class="benifit_Section">
              <div class="benifit_data">
                <img src={Career8} alt="" />
                <h4 style={{ paddingTop: '20px' }}>City Center Office</h4>
                <p>We are located in the busiest part of the city.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={mix2} style={{ width: '100%', margin: 'auto' }} />
        </div>
      </div>



      <div>
        <div class="explore">
          <div class="banner_image">
            <img class="image" src={Different} alt="" layout="fill" objectfit="cover" objectposition="center" />
          </div>
          <div class="banner_data">
            <div class="banner_content">
              <h4>What Makes us Different?</h4>
              <p>Our culture is in everything we do. It’s in our passion and dedication. It’s how we nurture our talent. It's the way we behave. It’s how we have fun. It's in our interactions and fostering meaningful relationships and a culture where everyone excels.</p>
              <Link to="/Custom">
                <button class="butn">EXPLORE MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career;