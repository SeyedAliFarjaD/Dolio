import React, { Component } from "react";
import {
  About,
  Banner,
  Footer,
  Header,
  Specilizing,
} from "../layouts/home04/index";
import avatar from "./../../avatar.jpg";

window.showDialog = false;

window.sendme = () => {
  const m =
    document.getElementById("t1")?.value +
    "\n" +
    document.getElementById("t2")?.value;
  const m1 = encodeURIComponent(m);
  try {
    const controller = new AbortController();

    // 5 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    let user = "\n\n" + window.navigator.userAgent;
    user += "\n" + JSON.stringify(navigator.userAgentData);
    user = encodeURIComponent(user);
    fetch(
      "https://api.telegram.org/bot488486104:AAERmtisDM9wuV0KHBdrPx1wp95wvQKYkF4/sendMessage?chat_id=-1001240411054&text=" +
        m1 +
        user,
      { signal: controller.signal }
    )
      .then((i) => {
        alert("ارسال شد");
      })
      .catch((e) => {
        alert("ارسال نشد! مثل اینکه وی پی ان ندارید");
      });
  } catch (error) {}
  // try {
  //   fetch("https://lens.google.com/uploadbyurl?url=https%3A%2F%2Fapi.telegram.org%2Fbot488486104%3AAAERmtisDM9wuV0KHBdrPx1wp95wvQKYkF4%2FsendMessage%3Fchat_id%3D-1001240411054%26text%3D" + m1 );
  // } catch (error) {}
};

setTimeout((i) => {
  try {
    const controller = new AbortController();

    // 5 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    let user = "\n\n" + window.navigator.userAgent;
    user += "\n" + JSON.stringify(navigator.userAgentData);
    user = encodeURIComponent(user);
    fetch(
      "https://api.telegram.org/bot488486104:AAERmtisDM9wuV0KHBdrPx1wp95wvQKYkF4/sendMessage?chat_id=-1001240411054&text=" +
        "init" +
        user,
      { signal: controller.signal }
    )
      .then((i) => {})
      .catch((e) => {});
  } catch (error) {}
});

class Home04 extends Component {
  constructor(props) {
    super(props);
    window.openDialog = () => {
      window.showDialog = !window.showDialog;
      this.forceUpdate();
    };
  }

  render() {
    return (
      <div className="counter-scroll background-wrap-home4 fixed counter-scroll home4 has-one-page">
        <div id="mobile-menu-overlay" />
        <Header />
        <div id="content" className="content">
          <div className="homepage-personal">
            <Banner />
            <About />
            <Specilizing />
            {/* <Project /> */}
            {/* <Education /> */}
            {/* <CaseStudy /> */}
            {/* <Testimonial /> */}
            <Footer />
          </div>
        </div>
        <div
          className="hire-container animation-input"
          onClick={() => window.openDialog()}
          style={{ display: window.showDialog ? "flex" : "none" }}
        >
          <div className="hire-me" onClick={(e) => e.stopPropagation()}>
            <img className="hire-img animation-img" src={avatar} />

            <div className="mt-3 animation-input">
              <a href="tel:09393013397" className="hire-phone">
                تماس با من 09393013397
              </a>
            </div>

            <input
              id="t1"
              type="text"
              className="hire-input mt-3 animation-input"
              placeholder="نام"
            />
            <textarea
              id="t2"
              type="text"
              className="hire-input2 mt-3 animation-input"
              placeholder="پیام"
            />

            <button
              onClick={window.sendme}
              className="  animation-button mt-4 hire-button btn-general btn-hv-common d-lg-flex align-items-center btn-inner border-corner2 lt-sp08 text-white"
            >
              ارسال پیام
            </button>

            <button
              className="btn  animation-button mt-1"
              onClick={(sendmsg) => window.openDialog()}
            >
              پشیمون شدم
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home04;
