import '../styles/globals.css'
import '../styles/default.css'
import Layout from '../site-components/Layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
      <Layout pageTitle="Design System" description="Hy-Vee Design System">
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
