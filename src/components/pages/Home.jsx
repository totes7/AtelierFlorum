import React from "react";
import "../../App.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-banner">
            <h1>FLORAL DECORATIONS & INSTALLATIONS</h1>
            <p>Hand crafted and artisan made designs.</p>{" "}
            <p>
              {" "}
              A friendly busy team with workshops in SW France and the U.K We
              love creative ideas and grateful to be given the trust to work
              with you.
            </p>
            <p>
              {" "}
              It’s important to know that we are committed to affordable and
              sustainable florals, decorations and hire.
            </p>{" "}
            <p> -Diana & Rebecca</p>
          </div>
        </div>
        <div className="links">
          <div className="link-card">
            <h1>SERVICES</h1>
            <p>Fresh Flowers</p>
            <p>Tablescaping</p>
            <p>Installations</p>
            <p>Hire Props</p>
            <p>and More...</p>
          </div>
          <div className="link-card">
            <h1>SOCIAL</h1>
            <p>Follow us on Instagram!</p>
            <i class="fab fa-instagram" />
          </div>
          <div className="link-card">
            <h1>ATELIER CAFÈ</h1>
            <p>Check out our upcoming events.</p>
            <i class="fa-solid fa-calendar-days" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
