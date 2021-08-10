import styles from './HeadPost.module.css';

const HeadPost = ({meta, isBlogPost}) => (
    <>
        <h1 className={isBlogPost ? styles['great-title'] : styles.h1}>{meta.title}</h1>
        <div className={styles.details}>
            {isBlogPost ? (
                <span>{`${meta.date} // ${meta.author}`}</span>
            ) : (
                <p>{meta.description}</p>
            )}
        </div>
    </>
);

export default HeadPost;
