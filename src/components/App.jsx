import React from "react";
import Header from "./Header";
import Video from "./Video";
import Services from "./Services";
import services from "../services.js";
import Work from "./Work";
import works from "../works.js";
import Process from "./Proccess";
import Contact from "./Contact";
import About from "./About";


function App() {
  return (
    <div>
      <Header />
      <Video />
      <section id="ourservices">
        <center className="headingservices">
          <h2 className="servicesheading">Our Services</h2>
        </center>
        <div className="servicesbackground ourservice-desktop">
          {services.map((service) => {
            return (
              <Services
                key={service.id}
                url={service.url}
                heading={service.heading}
                paragraph={service.paragraph}
              />
            );
          })}
        </div>
      </section>
      <section id="ourworks">
        <center>
          <h2 className="worksheading1">OUR WORKS</h2>
        </center>
        <div className="container ourworks-desktop">
          <div className="row">
            {works.map((work) => {
              return (
                <Work
                  key={work.id}
                  classattribute={work.class}
                  target={work.target}
                  src={work.src}
                  alt={work.alt}
                  fit={work.fit}
                  position={work.position}
                  overlayheading={work.overlayheading}
                  overlaysubheading={work.overlaysubheading}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="process" className="processbackground">
        <div className="container processvisible">
          <center className="processtextcenter">
            <h2 className="ourprocessheading">Our Process</h2>
          </center>
          <div className="container">
            <div className="owl-slider">
              
                <Process />
            
            </div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
}
export default App;
