import classes from './MainNavigation.module.css';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const MainNavigation = () => {
  const newTabOpenHandler = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const front = '<';
  const back = ' />';

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>{`${front}James Beswick${back}`}</h1>
        <p>Front-end Developer</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link activeClassName={classes.active} href="/">
              About Me
            </Link>
          </li>
          <li>
            <Link activeClassName={classes.active} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClassName={classes.active} href="/contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.icons}>
        <ul>
          <li>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faGithub}
              onClick={() => {
                newTabOpenHandler('https://github.com/James-Beswick');
              }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faLinkedin}
              onClick={() => {
                newTabOpenHandler(
                  'https://www.linkedin.com/in/james-beswick-93285a208/'
                );
              }}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faFacebook}
              onClick={() => {
                newTabOpenHandler(
                  'https://www.facebook.com/profile.php?id=100009528825789'
                );
              }}
            />
          </li>
        </ul>
      </div>
      <div className={classes.copyright}>
        <span>
          <FontAwesomeIcon icon={faCopyright} />
          Created by James Beswick 2021.
        </span>
      </div>
    </div>
  );
};

export default MainNavigation;
