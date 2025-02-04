import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Authentication/firebase'; 
import { PostContext } from '../context/PostContext'; 

const uploadPreset = 'z3bvbdnr';
const cloudName = 'dgtkpucrf';

const AddPost = () => {
    const { addPost } = useContext(PostContext);
    const [caption, setCaption] = useState('');
    const [pictureURL, setPictureURL] = useState('');
    const [fileInput, setFileInput] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let imageURL = pictureURL;

        if (fileInput) {
            const formData = new FormData();
            formData.append("file", fileInput);
            formData.append("upload_preset", uploadPreset);
            formData.append("folder", "postApp");

            try {
                const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();
                if (data.secure_url) {
                    imageURL = data.secure_url;
                } else {
                    console.error("Image upload failed");
                    return;
                }
            } catch (error) {
                console.error("Error uploading image:", error);
                return;
            }
        } else if (!pictureURL) {
            console.error("No image URL or file provided");
            return;
        }

        const newPost = {
            caption: caption,
            imageUrl: imageURL,
            createdAt: new Date()
        };

        try {
            await addDoc(collection(db, "posts"), newPost);
            addPost(newPost);
            setCaption('');
            setPictureURL('');
            setFileInput(null);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <section id="addPostSection">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter caption"
                    required
                />
                <input
                    type="url"
                    value={pictureURL}
                    onChange={(e) => setPictureURL(e.target.value)}
                    placeholder="Enter image URL"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFileInput(e.target.files[0])}
                />
                <button type="submit" className="btn">Add Post</button>
            </form>
        </section>
    );
};

export default AddPost;