import { useState } from 'react';

import classes from './Project.module.css';
import Card from '../ui/Card';
import IconList from './IconLists/IconList';
import IconListFoodOrder from './IconLists/IconListFoodOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import QuoteIconList from './IconLists/QuoteIconList';

const Project = props => {
  const [isHovered, setIsHovered] = useState(false);

  const siteNavigationHandler = url => {
    if (url === 'portfolio') {
      alert('You are already here!');
      return;
    }
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const github = props.githubURL;
  const site = props.siteURL;

  let iconList = null;

  if (props.iconList === 'portfolio') {
    iconList = <IconList />;
  } else if (props.iconList === 'food-order') {
    iconList = <IconListFoodOrder />;
  } else if (props.iconList === 'quote-app') {
    iconList = <QuoteIconList />;
  }

  return (
    <li className={classes.outerLi}>
      <Card>
        <div
          className={classes.imgDiv}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {!isHovered ? (
            <img src={props.screenshot} />
          ) : (
            <div className={classes.hoverImgDiv}>
              <Link href={`/projects/${props.id}`}>
                <img className={classes.hoverImg} src={props.screenshot} />
              </Link>
              <Link href={`/projects/${props.id}`}>
                <FontAwesomeIcon
                  className={classes.detailIcon}
                  icon={faSearch}
                />
              </Link>
            </div>
          )}
        </div>
        <div className={classes.desc}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className={classes.ulDiv}>
          <ul>{iconList}</ul>
        </div>
        <div className={classes.buttonDiv}>
          <button
            className={classes.buttonL}
            onClick={() => {
              siteNavigationHandler(github);
            }}
          >
            Github Repo
          </button>
          <button
            className={classes.buttonR}
            onClick={() => {
              siteNavigationHandler(site);
            }}
          >
            View Hosted Site
          </button>
        </div>
      </Card>
    </li>
  );
};

export default Project;
