import React from "react";

function Header() {
  const $ = window.$;
  $(window).scroll(function () {
    var positionTop = $(document).scrollTop();
  
    if (positionTop > 800) {
      $(".navbar").css("background", "#222328");
      $(".navbar").css("box-shadow", " 0 10px 33px rgba(0, 0, 0, .1)");
    }
    if (positionTop > 0 && positionTop < 800) {
      $(".navbar").css("background", "none");
      $(".navbar").css("box-shadow", "none");
    }
  });
  $(".home").click(function () {
    $(".navbar").css("background", "none");
    $(".navbar").css("box-shadow", "none");
  });



  


  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="examplenavbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" >
            <img
              className="navlogo"
              src="images\Logo Full.png"
              width="100px"
              alt="quolt-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto bar-padding">
              <li className="nav-item ">
                <a className="nav-link home" href="#videosection">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ourservices">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ourworks">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#process">
                  Process
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactsection">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
