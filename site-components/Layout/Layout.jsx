import Head from 'next/head';
import Header from '../Header/Header';
import styles from './Layout.module.css';
import Footer from '../Footer/Footer';

const Layout = ({ children, pageTitle, description }) => {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={description} />
                <title>{pageTitle}</title>
            </Head>
            <main className={styles.main}>
                <Header />
                <div className={styles.content}>{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
