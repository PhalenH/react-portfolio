import React from "react";

export default function AboutMe() {
  return (
    <>
    <section className="info-container" id="info">
      <h1>The Man Behind The Monitor</h1>
      <div className="about-me-container">
        <div className="bio-image-container">
          <img
            className="selfie"
            alt="Phalen at zion National Park"
            src={require('../../assets/zion-views.jpg')}
          />
        </div>
        <p>
          I'm a full stack web developer with a passion for turning ideas into
          results through precise code, creative designs, and fluid user
          interactions and experiences. <br />
          <br />
          I've spent my post-collegiate life working as a Physical Therapist
          assistant at skilled nursing facilities. This professional experience
          has sharpened my time management and leadership skills, tought me how
          to excel in high-stress environments, and allowed me to work with a
          variety of team members to achieve a common goal.
          <br />
          <br />
          Outside of work and my studies I enjoy staying active and going to see
          live music. When I can, I like to push my limits through distance
          running, skydiving, and skiing. I am always open to new experiences
          and learning new skills, life is short so might as well do all you
          can!
        </p>
      </div>
    </section>
    </>
  );
}
