import React from "react";
import videoBg from "../../assets/videos/formufit-food.mp4";

import dotImg from "../../assets/img/welcome-page/dot.png";
import icon1Img from "../../assets/img/welcome-page/icon_1.png";
import icon2Img from "../../assets/img/welcome-page/icon_2.png";
import icon3Img from "../../assets/img/welcome-page/icon_3.png";
import icon4Img from "../../assets/img/welcome-page/icon_4.png";
import icon5Img from "../../assets/img/welcome-page/icon_5.png";
import icon6Img from "../../assets/img/welcome-page/icon_6.png";
import icon7Img from "../../assets/img/welcome-page/icon_7.png";
import icon8Img from "../../assets/img/welcome-page/icon_8.png";
import icon9Img from "../../assets/img/welcome-page/icon_9.png";

import a1Img from "../../assets/img/welcome-page/a1.png";
import testimonialsImg from "../../assets/img/welcome-page/testimonials.jpg";
import test1Img from "../../assets/img/welcome-page/test_1.jpg";
import test2Img from "../../assets/img/welcome-page/test_2.jpg";
import test3Img from "../../assets/img/welcome-page/test_3.jpg";
import blogImg from "../../assets/img/welcome-page/blog.jpg";
import blog1Img from "../../assets/img/welcome-page/blog_1.jpg";
import blog2Img from "../../assets/img/welcome-page/blog_2.jpg";
import blog3Img from "../../assets/img/welcome-page/blog_3.jpg";
import footerImg from "../../assets/img/welcome-page/footer.png";
import AuthNavbar from "components/Navbars/AuthNavbar.js";

const Welcome = () => {
  import('./styles.scss') 
  return (
    <div id="welcome-page">
      <div className="super_container">
        <AuthNavbar />
        {/* <header className="header">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
                  <a href="/">
                    <div className="logo d-flex flex-row align-items-center justify-content-start">
                      <img src={dotImg} alt="" />{" "}
                      <div>
                        Formu<span>fit</span>
                      </div>
                    </div>
                  </a>
                  <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                      <li>
                        <a href="/auth/signup">Sign up</a>
                      </li>
                      <li>
                        <a href="/auth/login">Login</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>652-345 3222 11</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
          <div className="hamburger">
            <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
              <span>menu</span>
              <div className="hamburger_container">
                <div className="menu_hamburger">
                  <div
                    className="line_1 hamburger_lines"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                  ></div>
                  <div
                    className="line_2 hamburger_lines"
                    style={{ visibility: "inherit", opacity: 1 }}
                  ></div>
                  <div
                    className="line_3 hamburger_lines"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu trans">
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
              <li>
                <a href="services.html">Classes & Services</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>652-345 3222 11</span>
          </div>
        </div>

        <div className="home">
          {/* <video className="background-video" autoplay muted loop>
			<source src={videoBg} type="video/mp4"/>
			Your browser does not support the video tag.
		</video> */}
          <video
            className="background-video"
            src={videoBg}
            autoPlay
            loop
            muted
          />

          <div className="overlay"></div>
          <div className="home_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content text-center">
                    <div className="home_title">Get fit with us</div>
                    <div className="home_subtitle">
                      Pilates, Yoga, Fitness, Spinning & many more
                    </div>
                    <div className="button home_button ml-auto mr-auto">
                      <a href="/auth/login">Join Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxes">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                  <div className="box">
                    <div className="box_icon d-flex flex-column align-items-center justify-content-center">
                      <img src={icon1Img} alt="" />
                    </div>
                    <div className="box_title">Workouts </div>
                    <div className="box_text">
                      <p>
                        We are providing you with workouts after assessing your lifestyle and body pattern
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box_icon d-flex flex-column align-items-center justify-content-center">
                      <img src={icon2Img} alt="" />
                    </div>
                    <div className="box_title">Personalised Trainer</div>
                    <div className="box_text">
                      <p>
                        You will get personalised assistance for the workouts and Diet plans from our wellknown Trainer
                      </p>
                    </div>
                  </div>
                  =
                  <div className="box">
                    <div className="box_icon d-flex flex-column align-items-center justify-content-center">
                      <img src={icon3Img} alt="" />
                    </div>
                    <div className="box_title">Healthy diet plan</div>
                    <div className="box_text">
                      <p>
                        We provide you easy to make healthy Diet recipies to lose weight and make your body under control
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="container about_container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about_content">
                  <div className="section_title_container">
                    <div className="section_subtitle">welcome to FormuFit</div>
                    <div className="section_title">
                      About <span>FormuFit</span>
                    </div>
                  </div>
                  <div className="text_highlight">
                    Etiam commodo justo nec aliquam feugiat. Donec a leo eget
                    eget augue porttitor sollicitudin augue porttitor
                    sollicitudin.
                  </div>
                  <div className="about_text">
                    <p>
                      Morbi sed varius risus, vitae molestie lectus. Donec id
                      hendrerit velit, eu fringilla neque. Etiam id finibus
                      sapien. Donec sollicitudin luctus ex non pharetra. Aenean
                      lobortis ut leo vel porta. Maecenas ac vestibulum lectus.
                      Cras nulla urna, lacinia ut tempor facilisis, congue
                      dignissim tellus. Maecenas ac vestibulum lectus. Cras
                      nulla urna, lacinia ut tempor facilisis, congue dignissim
                      tellus. Phasellus sit amet justo ullamcorper, elementum
                      ipsum nec.
                    </p>
                  </div>
                  <div className="button about_button">
                    <a href="/auth/login">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_background">
            <div className="container fill_height">
              <div className="row fill_height">
                <div className="col-lg-6 offset-lg-6 fill_height">
                  <div className="about_image">
                    <img src={a1Img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div
            className="parallax_background parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(${testimonialsImg})` }}
            data-image-src={testimonialsImg}
            data-speed="0.8"
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section_title_container">
                  <div className="section_subtitle">welcome to FormuFit</div>
                  <div className="section_title">Testimonials</div>
                </div>

                <div className="test test_1 d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="test_image">
                      <img src={test1Img} alt="" />
                    </div>
                  </div>
                  <div className="test_content">
                    <div className="test_name">
                      <a href="/">Diane Smith</a>
                    </div>
                    <div className="test_title">client</div>
                    <div className="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit am et tellus blandit. Etiam nec odio vestibul. Etiam
                        nec odio vestibulum est mat tis effic iturut magna.
                      </p>
                    </div>
                    <div className="rating rating_4 test_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="test d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="test_image">
                      <img src={test2Img.jpg} alt="" />
                    </div>
                  </div>
                  <div className="test_content">
                    <div className="test_name">
                      <a href="/">Diane Smith</a>
                    </div>
                    <div className="test_title">client</div>
                    <div className="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit am et tellus blandit. Etiam nec odio vestibul. Etiam
                        nec odio vestibulum est mat tis effic iturut magna.
                      </p>
                    </div>
                    <div className="rating rating_4 test_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>

                <div className="test d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="test_image">
                      <img src={test3Img} alt="" />
                    </div>
                  </div>
                  <div className="test_content">
                    <div className="test_name">
                      <a href="/">Diane Smith</a>
                    </div>
                    <div className="test_title">client</div>
                    <div className="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit am et tellus blandit. Etiam nec odio vestibul. Etiam
                        nec odio vestibulum est mat tis effic iturut magna.
                      </p>
                    </div>
                    <div className="rating rating_4 test_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row test_button_row">
              <div className="col text-center">
                <div className="button test_button">
                  <a href="/auth/login">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
	<div className="gallery">
		

		<div className="gallery_slider_container">
			<div className="owl-carousel owl-theme gallery_slider">
				
	
				<div className="owl-item"><img src={gallery3Img} alt=""/></div>

			
				<div className="owl-item"><img src={gallery4Img} alt=""/></div>

			
				<div className="owl-item"><img src={gallery5Img} alt=""/></div>

		
				<div className="owl-item"><img src={gallery1Img} alt=""/></div>


				<div className="owl-item"><img src={gallery2Img} alt=""/></div>

			</div>
		</div>
	</div> */}

        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title_container">
                  <div className="section_subtitle">welcome to FormuFit</div>
                  <div className="section_title">Our Courses</div>
                </div>
              </div>
            </div>
            <div className="row services_row">
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon4Img} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Weight Loss Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon5Img} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Yoga Classes</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon6Img} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Spinning Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon7Img} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Private Fit Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon8Img} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Nutrition Classes</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon9Img} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Pillates Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog_overlay"></div>
          <div
            className="parallax_background parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(${blogImg})` }}
            data-speed="0.8"
          ></div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className=" d-flex flex-row align-items-start justify-content-start">
                  <div className="section_title_container">
                    <div className="section_subtitle">welcome to FormuFit</div>
                    <div className="section_title">The Blog</div>
                  </div>
                  <div className="all_posts_link ml-auto">
                    <a href="/">View all blog posts</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row blog_row">
              <div className="col-lg-4 blog_col">
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img src={blog1Img} alt="" />
                  </div>
                  <div className="blog_post_title">
                    <a href="/">Tips for the perfect body</a>
                  </div>
                  <div className="blog_post_date">
                    <a href="/">june 29, 2018</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Odio vestibulum est
                      mattis effic iturut.
                    </p>
                  </div>
                  <div className="blog_post_link">
                    <a href="/">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 blog_col">
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img src={blog2Img} alt="" />
                  </div>
                  <div className="blog_post_title">
                    <a href="/">Tips for the perfect body</a>
                  </div>
                  <div className="blog_post_date">
                    <a href="/">june 29, 2018</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Odio vestibulum est
                      mattis effic iturut.
                    </p>
                  </div>
                  <div className="blog_post_link">
                    <a href="/">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 blog_col">
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img src={blog3Img} alt="" />
                  </div>
                  <div className="blog_post_title">
                    <a href="/">Video: Pilates 4 Begginers</a>
                  </div>
                  <div className="blog_post_date">
                    <a href="/">june 29, 2018</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Odio vestibulum est
                      mattis effic iturut.
                    </p>
                  </div>
                  <div className="blog_post_link">
                    <a href="/">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="formufit-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="footer_container">
                  <div className="footer_content">
                    <div className="footer_logo">
                      <a href="/">
                        <div className="logo d-flex flex-row align-items-center justify-content-center">
                          <img src={dotImg} alt="" />
                          <div>
                            Formu<span>fit</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <nav className="footer_nav">
                      <ul className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="services.html">Classes & Services</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="newsletter_container">
                      <form
                        action="#"
                        id="newsletter_form"
                        className="newsletter_form"
                      >
                        <input
                          type="text"
                          className="newsletter_input"
                          placeholder="Enter your email here"
                          required="required"
                        />
                        <button className="newsletter_button">go</button>
                      </form>
                    </div>
                    <div className="copyright d-flex flex-row align-items-start justify-content-sm-end justify-content-center">
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </div>
                  </div>
                  <div className="footer_image text-center">
                    <img src={footerImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Welcome;
