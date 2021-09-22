import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faReact,
  faJsSquare,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';
import Card from '../../ui/Card';
import classes from './IconListFoodOrder.module.css';

const IconListFoodOrder = () => {
  return (
    <div className={classes.outerDiv}>
      <li className={classes.iconCard}>
        <Card extraClasses={classes.cardDiv}>
          <FontAwesomeIcon icon={faReact} className={classes.reactIcon} />
          <p>ReactJS / ContextAPI</p>
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
          <FontAwesomeIcon icon={faCss3} className={classes.cssIcon} />
          <p>CSS3 Modules</p>
        </Card>
      </li>
    </div>
  );
};

export default IconListFoodOrder;
