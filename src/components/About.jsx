import React from "react";
function About(){
    return (
        <section id="aboutus">
      <center>
        <h2 className="Aboutusheading">About Quolt</h2>
      </center>
      <div className="aboutus-mobile">
        <div className="aboutus-image" style={{backgroundImage: "url(images/aboutus/1.jpg)"}}>
        </div>
        <div className="container">
          <p className="aboutus-para"><strong style={{fontSize:"2rem"}}>Quolt </strong> was formed in 2016 with the vision to blend Design ,Technology and Innovation to meet futuristic requirements. Quolt is driven by Design entrepreneurs with variety of
            skills in the field of Industrial Design .
            Quolt has wide portfolio of products & services in various sectors in the industry like automobile, toy, medical and pharmaceutical, defence, IOT, furniture, electronics, safety etc; which has helped the team to hone their skills and
            deliver
            quality products.
            </p>
        </div>
      </div>
      </section>

    )
}
export default About;