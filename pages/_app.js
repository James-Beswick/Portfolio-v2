import { Fragment } from 'react';
import Layout1 from '../components/layout/Layout1';
import Layout2 from '../components/layout/Layout2';

import '../styles/globals.css';

const layouts = {
  L1: Layout1,
  L2: Layout2,
};

const MyApp = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout] || (children => <>{children}</>);
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

export default MyApp;
