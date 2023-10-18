import { memo } from 'react';

const Post = ({ post }) => {
    console.log(post);
    return (
        <>
            <div className="posts__item">
                <div className="title">
                    <h2>{post.title}</h2>
                </div>
                <div className="content">
                    <img src={post.thumbnail} alt={post.thumbnail} />
                    <span>{post.content}</span>
                </div>
            </div>
        </>
    );
};
export default memo(Post);
