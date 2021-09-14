import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./developer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import dheeraj from "../Images/dheeraj.jpg";
import nikita from "../Images/nikita.jpg";
import neha from "../Images/neha.jpg";
import amarnath from "../Images/amarnath.jpg";
function Developers() {
  // let myStyle = {
  //   style: {
  //     color: "red",
  //     backgroundColor: "white",
  //     height: "400px",
  //   },
  // };

  return (
    <div className="prop">
      <div className="developers">
        <h2> Developers</h2>
      </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div >
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQFYVd_xgHMr2A/profile-displayphoto-shrink_200_200/0/1589650666959?e=1635379200&v=beta&t=ljHyqJmcDWQMXuaUoa9aNjz4QvAjY-115u94L3Nxp8M" />
          <div className="myCarousel">
            <h3>Prithviraj K Tagadinamani</h3>
            <h4>Full Stack Developer</h4>
            <p>Everything seems impossible unless we imagine it happening...</p>
            <div className="icons">
              <div className="developerProfile">
                <a href="https://www.linkedin.com/in/prithviraj-tagadinamani-934709196/">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="developerProfile">
                <a href="https://www.instagram.com/prithviraj_k_t/">
                  <InstagramIcon />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={neha} />
          <div className="myCarousel">
            <h3>Neha S Mattikalli</h3>
            <h4>Backend Developer</h4>
            <p>
              If you want to bright like sun ,then you should burn like sun...
            </p>
            <div className="icons">
              <div className="developerProfile">
                <a href="https://www.linkedin.com/in/neha-mattikalli-1457b8201/">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="developerProfile">
                <a href="https://www.instagram.com/nehasmattikalli/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dheeraj">
          <img src={dheeraj} />
          <div className="myCarousel">
            <h3>Dheeraj Pawar</h3>
            <h4>Frontend Developer</h4>
            <p>It’s not about perfect. It’s about effort...</p>
            <div className="icons">
              <div className="developerProfile">
                <a href="https://www.linkedin.com/in/dheeraj-pawar-b836ba189/">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="developerProfile">
                <a href="https://www.instagram.com/pdheerajs/">
                  <InstagramIcon />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={nikita} />
          <div className="myCarousel">
            <h3>Nikita Kallur</h3>
            <h4>Frontend Developer</h4>
            <p>Do or die, be the best</p>
            <div className="icons">
              <div className="developerProfile">
                <a href="https://www.linkedin.com/in/nikita-kallur-64a2511b3/">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="developerProfile">
                <a href="https://www.instagram.com/kallurnikita/">
                  <InstagramIcon />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={amarnath} />
          <div className="myCarousel">
            <h3>Amarnath Sindhnur</h3>
            <h4>Designer</h4>
            <p>
              Pushing ourself beyond our limitations is where we tend fail...
            </p>
            <div className="icons">
              <div className="developerProfile">
                <a href="https://www.linkedin.com/in/amarnath-shindhur-03a961213">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="developerProfile">
                <a href="https://www.instagram.com/amarnath_shindhur/">
                  <InstagramIcon />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Developers;
