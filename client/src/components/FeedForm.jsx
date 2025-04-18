import React, { useState } from 'react';

const FeedForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // handle form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className='feed-form hidden-feed-form' >
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="feed-title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FeedForm;