import React from 'react';

const Post = ({ caption, imageUrl }) => {
    return (
        <div className="post">
            <p>{caption}</p>
            <img src={imageUrl} alt={caption} />
        </div>
    );
};

export default Post;