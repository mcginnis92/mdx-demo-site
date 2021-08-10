import HeadPost from '../HeadPost/HeadPost'

const BlogPost = ({ children, meta}) => {
    return (
        <div>
            <HeadPost meta={meta} isBlogPost />
            <article>{children}</article>
        </div>
    )
}

export default BlogPost;