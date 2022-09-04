import React, { Component } from "react";
import { Link } from "react-router-dom";
import links from "../links";
import menus from "../menus";
import bloglinks from "../bloglinks";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header id="header" className="header header-style4 has-menu-model">
        <div className="container">
          <div
            className="flex-header d-flex justify-content-between align-items-center"
            style={{ height: "90px" }}
          >
            {/* <div id="logo" className="logo">
                            <Link to="/" onClick={() => {window.location.href="/"}} title="Logo"><img src="images/logo/02.png" alt="images" data-width={122} data-height={34} data-retina="images/logo/02@2x.png" /></Link>
                        </div> */}

            {/* <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center">
                                <Link to="#" className="btn-inner border-corner2 lt-sp08 text-white">استخدام من</Link>
                            </div> */}

            <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center ml-auto">
              <Link
                to=""
                className="btn-inner border-corner2 lt-sp08 text-white font"
                onClick={() => window.openDialog()}
              >
                استخدام من
              </Link>

              {/* <Link
                to="/tes.pdf"
                className="btn-inner border-corner2 lt-sp08 text-white font"
                download={true}
                target="_blank"
                onClick={()=>window.openDialog()}
              >
                استخدام من
              </Link> */}
            </div>

            {/* <div dir="rtl" className="btn-menu mobile-header__menu-button">
              <div className="line line-1" />
              <div className="line line-2" />
              <div className="line line-3" />
              <div className="line line-4" />
            </div> */}
            <div className="content-menu d-lg-flex  ml-auto" style={{ display: "block", position:"static" ,transform:"none", left:0}}>
              <div className="nav-wrap">
                <nav id="mainnav2" className="mainnav">
                  <ul
                    className="menu ace-responsive-menu"
                    data-menu-style="horizontal"
                  >
                    <span className="p-3 colorText ">
                      <span className="hide-m">
                        بازم سوال داری؟  
                        <Link
                          to="/resume.pdf"
                          className="colorText"
                          download={true}
                          target="_blank"
                          style={{ fontSize: "17px" }}
                        >
                          رزومه
                        </Link>
                          رو دیدی؟  باهام تماس بگیر :)  
                      </span>
                      <a href="tel:09393013397" className="colorText">
                        09393013397
                      </a>
                    </span>
                    {/* <li>
                      <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center"  style={{height:"90px"}}>
                        <Link
                          to="#"
                          className="btn-inner border-corner2 lt-sp08 text-white"
                        >
                          استخدام من
                        </Link>
                      </div>
                    </li> */}
                    {/* <ul className="sub-menu" >
                                                {
                                                    links.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.tolink} onClick={() => {window.location.href=data.tolink}} className={data.id === 4 ? "active" : ""}>
                                                                {data.namelink}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul> */}
                    {/* </li>   
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id}><Link to={menu.tomenu} className="click-model">{menu.namemenu}</Link></li>
                                            ))
                                        }                           
                                        <li><Link to="#">Blog</Link>
                                            <ul className="sub-menu" >
                                                {
                                                    bloglinks.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.toblog} onClick={() => {window.location.href=data.toblog}}>
                                                                {data.nameblog}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li> */}
                  </ul>
                </nav>
              </div>
            </div>
            <div
              className="socials-list-hd s3 hv2 "
              style={{ display: "block", position:"static" }}
            >
              {/* <Link to="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
              <Link to="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </Link> */}
              <a href="https://wa.me/989393013397/?text=سلام, برای استخدام پیام دادم..."  target={"_blank"}>
                <i className="fa fa-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
