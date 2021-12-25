import React from "react";
import "./about.css";
import Me from "../../images/mypic.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Software Developer</p>
        <p className="a-desc">
          Be honest. Your ‘About Me’ page should reflect your genuine interests,
          whether they’re personal or work-related. You never know when someone
          might use material in your statement to strike up a conversation. For
          example, if you’re not really into yoga, don’t write you’re into yoga,
          or if you hate the account management aspect of your job, don’t write
          that you’re passionate about client experience.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
          </div> */}
      </div>
    </div>
  );
};

export default About;
