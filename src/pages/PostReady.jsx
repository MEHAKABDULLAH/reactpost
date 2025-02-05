// PostReady.js
import React, {useContext}  from 'react';
import AddPost from '../component/AddPost';
import PostsList from '../pages/PostList';
import { PostContext ,PostProvider} from '../context/PostContext';
 // Adjust the path as necessary
import '../index.css';

function PostReady() {
    const { posts } = useContext(PostContext);
    return (
        <PostProvider><br /><br />
            <div className="App">
                <header> <br /><br />
                    <h1 ><em className='text-white'>Post Sharing App</em></h1>
                </header>
                <AddPost />
                <PostsList />
            </div>
        </PostProvider>
    );
}

export default PostReady;