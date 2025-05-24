import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FeedForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

    const submitPost = async (e) => {
            e.preventDefault(); //prevents default reloading of page
            if (!title || !description || !file) { //checks so these are filled
                setError('All fields are required');
                return;
            }
            document.querySelector('.hidden-feed-form').style.visibility = 'hidden'; //hides form after submission
            window.location.reload(); //reloads page


            const formData = new FormData(); //a way to provide key-value pares. title: title, description: description
            formData.append('title', title);
            formData.append('description', description);
            formData.append('file', file);
            try {
                await axios.post('http://localhost:5000/feed', formData); //send the data with axios
                setTitle(''); //set values empty
                setDescription('');
                setFile(null);
                setError('');
            } catch (error) { //error handling
                setError('Error uploading post'); //display error
                console.log(error);    
            }
            
        };

  
  return (
    <form onSubmit={submitPost} className="feed-form hidden-feed-form">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="feed-title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="file">Upload File (Image or Video):</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])} // update file state
        />
      </div>
      <button type="submit">Submit</button>
      {error && {error}} 
    </form>
  );
};

export default FeedForm;