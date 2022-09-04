import React, { Component } from 'react';
import { Icon } from '../home02/about/index';

class About extends Component {
    render() {
        return (
            <section className="about-me t2 s3 shape-am position-relative" id="about">
                <div className="section-icons">
                    <Icon />
                </div>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-7 animate-element wow delay5 fadeInDown">
                        <div className="flat-title t2">
                            {/* <h4 className="sub-title mg-b22"> درباره من </h4> */}
                            <h4 className="sub-title mg-b22"> about me </h4>
                            <h2 className="title-section color-d11 mg-b41 font"> 
                            من اینجام تا در پروژه ها کمکتون کنم!
                            </h2>
                            <div className="description">
                                <p className="color-d13 lt-sp01">
                                 اگر به توسعه دهنده وب یا اندروید یا ویندوز نیاز داشتید با من تماس بگیرید
                                </p>
                                <p className="color-d13 lt-sp01" style={{textAlign:"justify"}}>
                                از سال 94 کارم رو با برنامه نویسی اندروید در کنار تحصیل شروع کردم. 
                                در تیم های بسیار خوب و قوی ای همکاری داشتم و الآن به سلامتی پس از بازگشت از خدمت مقدس سربازی دنبال یک تیم خوب دیگه هستم
                                
                                آدم بسیار متعهدیم و به دینم اهمیت زیادی می دم
                                 عاشق برنامه نویسی و بسیار با انگیزه هستم و از هرگونه فعالیتی در این حوزه و یادگیری مهارت های جدید استقبال می کنم 

                                 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="fact">
                        <NumberCount />
                        <div className="btn-contact bg-s2 text-center">
                            <h4 className="title color-d11">Get a project? Let’s talk.</h4>
                            <Link to="#" className="email color-s2 color-d15">yourmail@email.com</Link>
                        </div>
                    </div> */}
                </div>
                </div>
                {/* <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s"> */}
                {/* <img src="images/section/51.png" alt="images" /> */}
                {/* </div> */}
            </section>
        );
    }
}

export default About;
