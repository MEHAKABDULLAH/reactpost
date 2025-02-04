

import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext'; 
import Post from '../component/Post'; 

const PostsList = () => {
    const { posts } = useContext(PostContext);

    return (
        <section id="postsContainer">
            <h2><em>Your Posts</em></h2>
            <div id="postsGrid">
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <Post key={index} caption={post.caption} imageUrl={post.imageUrl} />
                    ))
                ) : (
                    <p id="noPostsMessage" style={{ textAlign: 'center' }}>No posts yet.</p>
                )}
            </div>
        </section>
    );
};

export default PostsList;