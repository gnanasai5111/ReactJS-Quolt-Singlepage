import React from "react";

function Video() {
  return (
    <section id="videosection">
      <div className="video-container">
        <video className="home-video" width="100%" autoPlay loop muted>
          <source src="images/dielect1.mp4" type="video/mp4" />
        </video>
        

        <div className="overlaytext animated animatedFadeInUp fadeInUp">
          <h1 className="videoheading quolt "> We are Quolt </h1>
          <p className="videoheading paragraph">
         
            Quolt Enterprises is a collaborative studio, an Innovations Lab,
            with a strong <br />
            focus on developing creative and game-changing design solutions.
          </p>
        </div>
      </div>
    
    </section>
  );
}
export default Video;
