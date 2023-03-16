import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './index.scss';
import profilePic from '../../images/LinkedIn-profile.jpeg';
import GreyMob from '../../images/bg/GreyMob.png';
import GreyDesk from '../../images/bg/GreyDesk.png';
import VideoPlayer from '../../components/VideoPlayer';

const About = () => {
  const urllink = 'https://youtu.be/E7lBtEz4eX4';

  return (
    <div className="container about" id="about">
      <div className="header-wrapper">
        <h1 className="title">About Me</h1>
        <img src={GreyMob} className="greybg greybg-mob" alt="" />
        <img src={GreyDesk} className="greybg greybg-desk" alt="" />
      </div>

      <section className="about-content-wrapper">
        <img
          src={profilePic}
          className="profile-mobile"
          width="300"
          alt="Jennifer Yiu"
        />

        <p className="text">
          As a full-stack developer, I am driven by my passion for the future of technology, creative problem-solving, and fostering positive team dynamics. My insatiable curiosity fuels my personal and professional growth, whether I'm memorizing over 750 digits of pi, solving a Rubik’s cube, scuba diving, understanding blockchain, or backpacking solo through Europe and Southeast Asia.
        </p>
        <p className="text">
          My love for coding started at an early age when my brother taught me how to write scripts to play a simple song on the computer. Since then, I've honed my skills, building my first website using HTML in sixth grade, and advancing my knowledge of front-end technologies like React, React-Native, JavaScript, jQuery, CSS, and SCSS. I've also gained experience with back-end technologies such as Python, SQL, and Django and remain committed to expanding my expertise.
        </p>

        <VideoPlayer link={urllink} />
        <p className="text">
          With a growth mindset, I am always eager to learn and thrive in collaborative environments that push me to be my best. If you're interested in discussing new ideas or are in the tech industry, I'd love to connect and explore potential opportunities to work together.
        </p>
      </section>
    </div>
  );
};

export default withStyles(styles)(About);
