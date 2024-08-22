import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import axios from 'axios';
import styles from './AddStory.module.css'; // Adjust the path as needed

const AddStory = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    title: '',
    writer: '',
    synopsis: '',
    category: '',
    cover_image: null,
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

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
  
        const compressedFile = await imageCompression(file, options);
  
        // Update formData with the compressed file object
        setFormData({
          ...formData,
          cover_image: compressedFile, // Store the compressed file
        });
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('writer', formData.writer);
    formDataToSend.append('synopsis', formData.synopsis);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('keywords', formData.keywords);
    formDataToSend.append('status', formData.status);

    // Append cover image if it's set
    if (formData.cover_image) {
      formDataToSend.append('cover_image', formData.cover_image); // Ensure cover_image is a File object or Blob
    }


    try {
      

      await axios.post('http://localhost:5000/story_management/addstory', formDataToSend, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
      });
    

      const { storyId } = await axios.post('http://localhost:5000/story_management/addstory', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

        // Post category with storyId
        await axios.post('http://localhost:5000/story_management/addcategory', {
            storyId,
            name: formData.category,
        });

        // Post status with storyId
        await axios.post('http://localhost:5000/story_management/addstatus', {
            storyId,
            name: formData.status,
        });

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
          <label htmlFor="writer">Writer Name</label>
          <input
            type="text"
            id="writer"
            name="writer"
            value={formData.writer}
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
          <label htmlFor="cover_image">Cover Image</label>
          <input
            type="file"
            id="cover_image"
            name="cover_image"
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