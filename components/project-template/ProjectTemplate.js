import classes from './ProjectTemplate.module.css';
import Project from './Project';

const PROJECT_DATA = [
  {
    screenshot:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    githubURL: 'https://github.com/James-Beswick/React-Router-Practice',
    siteURL: 'portfolio',
    title: 'My Portfolio',
    description:
      'This is my portfolio site, built in NextJS and my first site designed and built entirely on my own. I make use of custom react hooks and SASS, it was a great learning experience overall. ',
    id: 'p1',
    iconList: 'portfolio',
  },
  {
    screenshot: './MealApp.jpeg',
    githubURL: 'https://github.com/James-Beswick/Food-Order-App',
    siteURL: '',
    title: 'Food Ordering App',
    description:
      'I built this site using create-react-app as a part of the React course I took on Udemy. It was my first attempt at a full front-end using CRUD operations and a firebase backend to perform POST and GET requests.',
    id: 'p2',
    iconList: 'food-order',
  },
  {
    screenshot: './QuotesApp.jpeg',
    githubURL: 'https://github.com/James-Beswick/React-Router-Practice',
    siteURL: '',
    title: 'Inspirational Quote App',
    description:
      'This app was created with the purpose of learning how to implement React Router to make a Multi-page SPA. ',
    id: 'p3',
    iconList: 'quote-app',
  },
];

const ProjectTemplate = () => {
  return (
    <ul className={classes.outerUl}>
      {PROJECT_DATA.map(project => {
        return (
          <Project
            screenshot={project.screenshot}
            githubURL={project.githubURL}
            siteURL={project.siteURL}
            description={project.description}
            title={project.title}
            key={project.id}
            id={project.id}
            iconList={project.iconList}
          />
        );
      })}
    </ul>
  );
};

export default ProjectTemplate;
