import React from "react";
import Popup from "./Popup";
import popups from "../popups";


function Work(props){
    
    return (
        <div className="col-lg-4 col-md-6 col-xs-12 work-margin">
        <figure className="ourworkfigure">
          <img className={`ourworkimage ${props.classattribute}`} data-toggle="modal" data-target={`#popup-${props.target}`} loading="lazy" src={`images/works/${props.src}.jpg`} alt={`${props.alt}-img`}  />
          <h4 className="overlayheading">{props.overlayheading}<span className="sub-heading"><i>{props.overlaysubheading}</i></span></h4>
        </figure>
        {popups.map((popup)=>{
            return (
                <Popup 
                key={popup.id}
                num={popup.num}
                heading={popup.heading}
                src={popup.src} />
            )
        })}
      </div>
      
  

    );
}
export default Work;