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
          I am a full-stack developer who's passionate about the future of tech, problem-solving, and improving team dynamics. My curiosity about the
          world around me drives me to learn and grow - whether it’s memorizing over 750 digits of pi, solving a Rubik’s cube, becoming a certified
          scuba diver, understanding blockchain, or backpacking alone in Europe and
          Southeast Asia.
        </p>
        <p className="text">
          My first exposure to code was at 6 years old. My brother showed me how
          to write scripts to play a simple song on the computer. I was
          enthralled by how a combination of characters and symbols can turn the
          computer into a piano. In sixth grade, I built my first website using
          HTML.
        </p>
        {/* <p className="text">
              As I dive deeper into the world of development and technology, my
              passion for it grows stronger. It’s challenging, evolving, and
              it’s the future. The tech world is ever-changing and I want to
              work in a team to create something amazing together.
            </p> */}

        <p className="text">
          My primary focus is in front-end technologies including
          <span className="techs">
            {' '}
            React, React-Native, JavaScript, jQuery, CSS, SCSS, and PHP.{' '}
          </span>
          I've also been working a lot with back-end technologies such as{' '}
          <span className="techs">Python, SQL, Django, and Grails/Groovy</span> and am
          interested to learn more! I have a growth mindset with a passion to learn and to build the best project in any team I'm in.
        </p>
        <VideoPlayer link={urllink} />
        <p className="text">
          If you love discussing new ideas or are in tech, let’s connect! I’d
          love to chat about new technology, my expertise, your expertise and
          how we might work together!
        </p>
      </section>
    </div>
  );
};

export default withStyles(styles)(About);
