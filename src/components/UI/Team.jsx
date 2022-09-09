import React from "react";
import "../../styles/team.css";
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          <div className="team__item">
            <div className="team__img">
              <img src={team01} alt="" />
            </div>
            <div className="team__details">
              <h4>Courty Hurry</h4>
              <p className="description">Product Developer</p>

              <div className="team__member-social">
                <span>
                  <i class="ri-linkedin-box-fill"></i>
                </span>
                <span>
                  <i class="ri-facebook-circle-fill"></i>
                </span>
                <span>
                  <i class="ri-twitter-fill"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src={team02} alt="" />
            </div>
            <div className="team__details">
              <h4>Lindas Walton</h4>
              <p className="description">Sr Designer</p>

              <div className="team__member-social">
                <span>
                  <i class="ri-linkedin-box-fill"></i>
                </span>
                <span>
                  <i class="ri-facebook-circle-fill"></i>
                </span>
                <span>
                  <i class="ri-twitter-fill"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src={team03} alt="" />
            </div>
            <div className="team__details">
              <h4>John</h4>
              <p className="description">CEO & Co-founder</p>

              <div className="team__member-social">
                <span>
                  <i class="ri-linkedin-box-fill"></i>
                </span>
                <span>
                  <i class="ri-facebook-circle-fill"></i>
                </span>
                <span>
                  <i class="ri-twitter-fill"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="team__item">
            <div className="team__img">
              <img src={team04} alt="" />
            </div>
            <div className="team__details">
              <h4>Alex</h4>
              <p className="description">Sr Software Developer</p>

              <div className="team__member-social">
                <span>
                  <i class="ri-linkedin-box-fill"></i>
                </span>
                <span>
                  <i class="ri-facebook-circle-fill"></i>
                </span>
                <span>
                  <i class="ri-twitter-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
