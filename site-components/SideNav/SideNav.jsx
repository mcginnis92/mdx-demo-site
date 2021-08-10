import styles from './SideNav.module.css';

const SideNav = (props) => (
    <nav className={styles.sideNav} role="navigation" aria-label="Secondary Menu">
        {props.menuTitle && (
            <h2 className={styles.title}>{props.menuTitle}</h2>
        )}
        <div className={styles.listWrapper}>
            {props.enableScrolling && (
                <button
                    aria-label="scroll left"
                    role="button"
                    type="button"
                    className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
                >
                    <svg
                        focusable="false"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        id="sidenav-scroll-left"
                        data-name="Right Caret"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{fill: '3F3F3F'}}
                    >
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            className="cls-1"
                            d="M17,4a.99676.99676,0,0,1-.293.707L9.41406,12l7.293,7.293A.99989.99989,0,0,1,15.293,20.707l-8-8a.99962.99962,0,0,1,0-1.41406l8-8A1,1,0,0,1,17,4Z"/>
                    </svg>
                </button>
            )}
            <ul className={`${styles.menuBar} ${styles.vertical}`} role="menubar">
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Account Profile"
                        className={`${styles.navigationItem} ${styles.sideNavLink}`}
                    >
                        {'Account Profile'}
                    </a>
                </li>
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Fuel Saver + Perks"
                        className={`${styles.navigationItem} ${styles.sideNavLink}`}
                    >
                        {'Fuel Saver + Perks'}
                        <sup>®</sup>
                    </a>
                </li>
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Communication Preferences"
                       className={`${styles.navigationItem} ${styles.sideNavLink}`}>
                        {'Communication Preferences'}
                    </a>
                </li>
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Order History"
                        className={`${styles.navigationItem} ${styles.sideNavLink}`}>
                        {'Order History'}
                    </a>
                </li>
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Addresses"
                        className={`${styles.navigationItem} ${styles.sideNavLink}`}>
                        {'Addresses'}
                    </a>
                </li>
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Payment Methods"
                        className={`${styles.navigationItem} ${styles.sideNavLink}`}>
                        {'Payment Methods'}
                    </a>
                </li>
                <li role="none">
                    <a
                        href="#"
                        role="menuitem"
                        target="_self"
                        title="Hy-Vee Plus Membership"
                        className={`${styles.navigationItem} ${styles.sideNavLink}`}>
                        {'Hy-Vee Plus Membership'}
                    </a>
                </li>
            </ul>
            {props.enableScrolling && (
                <button
                    aria-label="scroll right"
                    role="button"
                    type="button"
                    className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
                >
                    <svg
                        focusable="false"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        id="sidenav-scroll-right"
                        data-name="Right Caret"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{fill: '#3F3F3F'}}
                    >
                        <path
                            d="M8,21a1,1,0,0,1-.707-1.707L14.58594,12,7.293,4.707A.99989.99989,0,0,1,8.707,3.293l8,8a.99962.99962,0,0,1,0,1.41406l-8,8A.99676.99676,0,0,1,8,21Z"/>
                    </svg>
                </button>
            )}
        </div>
    </nav>
);

export default SideNav;