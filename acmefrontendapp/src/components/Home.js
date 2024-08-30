import images from "../assets/homeBackground/college students-cuate.png";
import React from "react";
import Events from "./Events";
import Winners from "./Winners";
import "./Home.css"; // Ensure you import the CSS file

export default function Home() {
  return (
    <div>
      <div className="Home_Bg">
        <div className="uniqueCircle uniqueCircle1"></div>
        <div className="uniqueCircle uniqueCircle2"></div>
        <div className="uniqueCircle uniqueCircle3"></div>
        <div className="uniqueCircle uniqueCircle4"></div>
        <div className="uniqueCircle uniqueCircle5"></div>
        <div className="Home_ImgDiv">
          <img className="Home_Img" src={images} alt="College Students" />
        </div>
        <div className="Home_TDiv">
          <h1 className="Home_H1">How is your College life going?</h1>
          <p className="Home_p">
            <strong>ACME</strong> is an initiative by the Department of{" "}
            <strong> ECE</strong> aimed at fostering extracurricular and
            co-curricular activities among students, enhancing their social
            interaction through various fun activities.
          </p>
          <div className="trackRecord">
            <div className="trackR">
              <h1 className="trackRh1">Events</h1>
              <hr />
              <h2 className="trackRh2">150+</h2>
            </div>
            <div className="trackR">
              <h1 className="trackRh1">Years</h1>
              <hr />
              <h2 className="trackRh2">10+</h2>
            </div>
            <div className="trackR">
              <h1 className="trackRh1">Reach</h1>
              <hr />
              <h2 className="trackRh2">1000+</h2>
            </div>
          </div>
        </div>
      </div>
      <Events />
      <Winners />
    </div>
  );
}
