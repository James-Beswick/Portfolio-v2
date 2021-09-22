import Link from 'next/link';
import BigCard from '../../ui/BigCard';
import classes from './ProjectDetail.module.scss';

const ProjectDetail = props => {
  return (
    <BigCard>
      <div>
        <h2>{props.title}</h2>
        <p>{props.fullDesc}</p>
      </div>
      <Link href="/projects">
        <button className={classes.returnBtn}>Return</button>
      </Link>
    </BigCard>
  );
};

export default ProjectDetail;
