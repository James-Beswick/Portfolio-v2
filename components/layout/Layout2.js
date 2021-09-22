import MainNavigation from './MainNavigation';
import classes from './Layout2.module.css';
import { Fragment } from 'react';

const Layout2 = props => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
    </Fragment>
  );
};

export default Layout2;
