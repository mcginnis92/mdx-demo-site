import {docs} from '../../helpers/getAllDocs';
import HeadPost from '../../site-components/HeadPost/HeadPost';
import Link from 'next/link';

const ComponentsHome = () => {
    return (
        <div>
            <h1>{'Components'}</h1>
            {docs.map((doc) => (
                <article key={doc.link}>
                    <HeadPost meta={doc.module.meta} />
                    <Link href={'/components' + doc.link}>
                        <a style={{color: '#3F3F3F'}}>View the docs →</a>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default ComponentsHome;
