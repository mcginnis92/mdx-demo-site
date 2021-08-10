import {posts} from '../../helpers/getAllPosts';
import Post from '../../site-components/Post/Post';

const BlogHome = () => {
    const sortedBlogPosts = posts.sort((a, b) => new Date(a.module.meta.date) - new Date(b.module.meta.date)).reverse();

    return (
        <>
            {sortedBlogPosts.map((post) => (
                <Post key={post.link} post={post}/>
            ))}
        </>
    );
}

export default BlogHome;
