import React, { Component } from "react";
import { Link } from "react-router-dom";
class Banner extends Component {
  render() {
    return (
      <section className="banner-section s4 two-home" id="home">
        <div className="container">
          <div className="content-text position-relative">
            <div
              className="animate-element wow delay5 fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="tag color-d1 mg-b34 head-text">
                {" "}
                توسعه‌دهنده فول استک
              </div>
              <h1 className="cd-headline clip is-full-width title color-d11 mg-b41">
                <span>سلام👋</span>

                <span className="my-name">فرجاد هستم</span>
                <br />

                <span className="head-text color-d6 ml-4"> توسعه‌دهنده </span>

                <span className="cd-words-wrapper color-d6">
                  {/* <b className="is-visible">I’m Ali Farjad!</b>
                                <b>I’m Fullstack Dev!</b> */}

                  <b className="is-visible"> وب </b>
                  <b> موبایل </b>
                  <b> ویندوز </b>
                  <b> سرور </b>
                </span>
              </h1>
              <p className="color-d13 lt-sp02 mb-4">
                از سال 94 کارم رو با برنامه نویسی اندروید در کنار تحصیل رشته
                کامپیوتر شروع کردم...
                {/* در تیم های بسیار خوب و قوی ای همکاری داشتم و الآن به سلامتی پس از بازگشت از خدمت مقدس سربازی دنبال یک تیم خوب دیگه هستم
                                
                                آدم بسیار متعهدیم و به دینم اهمیت زیادی می دم
                                 عاشق برنامه نویسی و بسیار با انگیزه هستم و از هرگونه فعالیتی در این حوزه و یادگیری مهارت های جدید استقبال می کنم 

                                  */}
              </p>
            </div>
            <div
              className="animate-element wow delay5 fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fl-btn btn-general color-s2 btn-hv-border">
                <Link
                  to="/resume.pdf"
                  className="f-w500 color-d6 border-corner5 lt-sp01 text-two"
                  download={true}
                  target="_blank"
                >
                 دانلود رزومه
                </Link>

                {/* <Link
                  to="#"
                  className="f-w500 color-d6 border-corner5 lt-sp01 text-two"
                >
                  {" "}
                  دانلود رزومه{" "}
                </Link> */}
              </div>
            </div>
          </div>
          {/* <div className="featured-post border-corner-bl">
                        <img src="images/section/47.jpg" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                        </div>
                    </div> */}
        </div>
        {/* <div className="iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming" data-wow-delay="0.3s">
                    <div className="avatar position-relative">
                        <img src="images/footer/01.jpg" alt="images" />
                    </div>
                    <div className="content-inner">
                        <h4 className="name lt-sp04 mg-b16 text-white position-relative">Available for Project</h4>
                        <div className="fl-btn btn-general">
                            <Link to="#" className="text-white border-corner2">Hire Me</Link>
                        </div>
                    </div>
                </div> */}
      </section>
    );
  }
}

export default Banner;
