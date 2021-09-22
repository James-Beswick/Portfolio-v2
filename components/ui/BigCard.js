import classes from './BigCard.module.css';

const BigCard = props => {
  return (
    <div className={`${classes.bigCard} ${props.extraClasses || ''}`}>
      {props.children}
    </div>
  );
};

export default BigCard;
