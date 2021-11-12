  import React from "react";
  function Services(props){
      return (
        <div className="container-fluid myservices servicesmargin service-container1" style={{background:`url(${props.url}) 50% 0 no-repeat fixed`, height: "600px"}}>
        <div className="overlayopacity">
        </div>
        <div className="container txt in-right show-on-scroll  service1">
          <h4 className="headingofourservices">{props.heading}</h4>
          <p className="servicesparagraph">
           {props.paragraph}
          </p>
  
        </div>
      </div>

      )
  }


export default Services