import videoBg from '../../assets/videos/formufit-food.mp4'
import React from "react";
import AuthNavbar from "../../components/Navbars/AuthNavbar";
import "./weclome.scss"
const Welcome = () => {
    return (
        <div className="welcome-page">
            <AuthNavbar />
            <div className='main d-flex'>
                <section className="section-left">
                    <div className="title-content-wrapper">
                        <h1 className="title lg">
                    <span className="_escape_up-wrapper">
                        <span className="_escape_up-em">Creating</span>
                    </span>
                            <span className="_escape_up-wrapper">
                        <span className="_escape_up-em">Happiness</span>
                    </span>
                            <span className="_escape_up-wrapper">
                        <span className="_escape_up-em">Within</span>
                    </span>
                        </h1>
                        <h3 className="sub-title title subhead-2">
                            <span className="_escape_up-fade-in"> Holistic approach to</span>
                            <span className="_escape_up-fade-in"> physical well-being</span>
                            <span className="_escape_up-fade-in"> and mental health</span>
                        </h3>
                    </div>
                    <a className="btn-lg title md _anim-scale" href="/dashboard">
                        <div className="_escape_up-wrapper">
                            <div className="_anim-outer _escape_up"> Go to Dashboard</div>
                        </div>
                        <div className="btn-arrow _anim-start _scale-up">
                            <div className="icon">
                                <svg width="27" height="27" className="svg-icon" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.642 9.842L20.642 20.3166C20.642 20.7023 20.3294 21.0149 19.9437 21.0149L9.46911 21.0149C9.08344 21.0149 8.7708 20.7023 8.7708 20.3166C8.7708 19.931 9.08344 19.6183 9.46911 19.6183L18.2579 19.6183L5.48394 6.35045L6.47149 5.36289L19.2454 18.6308L19.2454 9.842C19.2454 9.45633 19.5581 9.14369 19.9437 9.14369C20.3294 9.14369 20.642 9.45633 20.642 9.842Z"></path>
                                </svg>
                            </div>
                        </div>
                    </a>
                </section>
                <section className="section-right">
                    <div className="overlay"></div>
                    <video className="full-height-video" src={videoBg} autoPlay loop muted />
                </section>
            </div>
        </div>
    );
};

export default Welcome;
