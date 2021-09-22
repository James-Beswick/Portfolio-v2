import MainNavigation from './MainNavigation';
import classes from './Layout1.module.css';
import { Fragment } from 'react';

const Layout1 = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.bg}></div>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
    </div>
  );
};

export default Layout1;
