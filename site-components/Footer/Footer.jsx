import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.text}>
            {`© ${new Date().getFullYear()} Hy-Vee, Inc. All rights reserved.`}
        </p>
    </footer>
);

export default Footer;