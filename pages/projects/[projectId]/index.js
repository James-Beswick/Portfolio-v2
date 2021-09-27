import ProjectDetail from '../../../components/project-template/project-details/ProjectDetail';

const ProjectDetails = props => {
  return (
    <ProjectDetail
      title={props.projectData.title}
      fullDesc={props.projectData.description}
    />
  );
};

ProjectDetails.layout = 'L2';

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          projectId: 'p1',
        },
      },
      {
        params: {
          projectId: 'p2',
        },
      },
      {
        params: {
          projectId: 'p3',
        },
      },
    ],
  };
};

export const getStaticProps = context => {
  const projectId = context.params.projectId;

  const DUMMY_PROJECT = {
    title: 'My Portfolio',
    description:
      "This is my first project built from the ground up. I have used it to learn and practice the use of NextJS, getting through problems without help from instructors. The codebase is built with 'create-next-app' and contains; ReactJS/NextJS, SASS/SCSS Modules with a small Firebase Realtime Database.",
  };

  return {
    props: {
      projectData: {
        id: projectId,
        title: DUMMY_PROJECT.title,
        description: DUMMY_PROJECT.description,
      },
    },
  };
};

export default ProjectDetails;
