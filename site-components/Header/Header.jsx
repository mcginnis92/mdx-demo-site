import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>
                    <h1>Hy-Vee Design System</h1>
                </a>
            </Link>
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/design-tokens">
                    <a>Foundations</a>
                </Link>
                <Link href="/components">
                    <a>Components</a>
                </Link>
                <Link href="/updates">
                    <a>Updates</a>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
