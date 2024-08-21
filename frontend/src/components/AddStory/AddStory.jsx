import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AddStory.module.css'; // Adjust the path as needed

const AddStory = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    title: '',
    writerName: '',
    synopsis: '',
    category: '',
    coverImage: null,
    keywords: '',
    status: '',
  });

  const [categories, setCategories] = useState([]); // Array of categories
  const [statuses, setStatuses] = useState([]); // Array of statuses

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const categoryResponse = await axios.get('http://localhost:5000/story_management/addcategory');
        setCategories(categoryResponse.data); // Store categories in state

        const statusResponse = await axios.get('http://localhost:5000/story_management/addstatus');
        setStatuses(statusResponse.data); // Store statuses in state
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      coverImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to send
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('writerName', formData.writerName);
    formDataToSend.append('synopsis', formData.synopsis);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('keywords', formData.keywords);
    formDataToSend.append('status', formData.status);
    
    if (formData.coverImage) {
      formDataToSend.append('coverImage', formData.coverImage);
    }
    
    try {
      // Send POST request to add the story
      await axios.post('http://localhost:5000/story_management/addstory', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Necessary for file upload
        },
      });
      
      // Redirect to the home page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error submitting story:', error);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        Back
      </button>

      <h1>Add Story</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="writerName">Writer Name</label>
          <input
            type="text"
            id="writerName"
            name="writerName"
            value={formData.writerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="synopsis">Synopsis</label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))
            ) : (
              <option disabled>Loading categories...</option>
            )}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="keywords">Keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select status</option>
            {statuses.length > 0 ? (
              statuses.map((status) => (
                <option key={status.id} value={status.name}>
                  {status.name}
                </option>
              ))
            ) : (
              <option disabled>Loading statuses...</option>
            )}
          </select>
        </div>

        <button type="button" className={styles.addChapterButton}>
          Add Chapter
        </button>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStory;
