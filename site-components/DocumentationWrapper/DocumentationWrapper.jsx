import HeadPost from '../HeadPost/HeadPost'

const DocumentationWrapper = ({ children, meta}) => {
    return (
        <div>
            <HeadPost meta={meta} isBlogPost={false} />
            <article>{children}</article>
        </div>
    )
}

export default DocumentationWrapper;