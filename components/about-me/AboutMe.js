import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import BigCard from '../ui/BigCard';
import classes from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <BigCard>
      <div className={classes.wrapper}>
        <div className={classes.h1Div}>
          <h1 className={classes.hiH1}>Hi, I'm James!</h1>
        </div>
        <div className={classes.aboutMeWrapper}>
          <div className={classes.imgDiv}>
            <img />
          </div>
          <div className={classes.aboutMe}>
            <h2>About me</h2>
            <p>
              I am a Maths graduate with a great interest in front-end and full
              stack software development. I began my coding journey by learning
              MATLAB through my time at university. Since graduating I have
              undertaken Udemy courses on both Javascript and React, and then,
              I've used these languages to build my first websites. Meanwhile I
              have been working on self-teaching NextJS, using it to create my
              portfolio site. I plan on moving onto Node.js and MongoDB to build
              scalable projects in the MERN stack. I am always eager to increase
              my knowledge and gain experience with my current stack whilst
              pushing forward onto new languages, frameworks and applications.
            </p>
          </div>
        </div>
        <div className={classes.btnWrapper}>
          <Link href="/projects">
            <button className={classes.button}>See My Work!</button>
          </Link>
        </div>
        <div className={classes.techWrapper}>
          <div className={classes.tech}>
            <h2>My Skills</h2>
            <ul className={classes.techList}>
              <li className={classes.techLi}>
                <div className={classes.header}>
                  <FontAwesomeIcon className={classes.iconR} icon={faReact} />
                  <h3>ReactJS / NextJS / React Router</h3>
                </div>
                <div className={classes.body}>
                  <p></p>
                </div>
              </li>
              <li className={classes.techLi}>
                <div className={classes.header}>
                  <FontAwesomeIcon className={classes.iconJ} icon={faJs} />
                  <h3>JavaScript (ES6+)</h3>
                </div>
                <div className={classes.body}>
                  <p></p>
                </div>
              </li>
              <li className={classes.techLi}>
                <div className={classes.header}>
                  <FontAwesomeIcon className={classes.iconH} icon={faHtml5} />
                  <h3>HTML5</h3>
                </div>
                <div className={classes.body}>
                  <p></p>
                </div>
              </li>
              <li className={classes.techLi}>
                <div className={classes.header}>
                  <FontAwesomeIcon className={classes.iconC} icon={faCss3} />
                  <h3>CSS3 / SASS Modules</h3>
                </div>
                <div className={classes.body}>
                  <p></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BigCard>
  );
};

export default AboutMe;
