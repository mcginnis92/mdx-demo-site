import Link from 'next/link'
import HeadPost from '../HeadPost/HeadPost'

const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post

    return (
        <article>
            <HeadPost meta={meta} />
            <Link href={'/updates' + link}>
                <a style={{color: '#3F3F3F'}}>Read more →</a>
            </Link>
        </article>
    )
}

export default Post;
