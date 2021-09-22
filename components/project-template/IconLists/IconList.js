import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faReact,
  faJsSquare,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import Card from '../../ui/Card';
import classes from './IconList.module.css';

const IconList = () => {
  return (
    <div className={classes.outerDiv}>
      <li className={classes.iconCard}>
        <Card extraClasses={classes.cardDiv}>
          <FontAwesomeIcon icon={faReact} className={classes.reactIcon} />
          <p>ReactJS/NextJS</p>
        </Card>
      </li>
      <li className={classes.iconCard}>
        <Card extraClasses={classes.cardDiv}>
          <FontAwesomeIcon icon={faJsSquare} className={classes.jsIcon} />
          <p>JavaScript (ES7)</p>
        </Card>
      </li>
      <li className={classes.iconCard}>
        <Card extraClasses={classes.cardDiv}>
          <FontAwesomeIcon icon={faHtml5} className={classes.htmlIcon} />
          <p>HTML5</p>
        </Card>
      </li>
      <li className={classes.iconCard}>
        <Card extraClasses={classes.cardDiv}>
          <FontAwesomeIcon icon={faSass} className={classes.sassIcon} />
          <p>SCSS/SASS Modules</p>
        </Card>
      </li>
    </div>
  );
};

export default IconList;
