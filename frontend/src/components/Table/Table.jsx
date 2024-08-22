import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './Table.module.css';
import axios from 'axios';

const Table = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch stories
        const storiesResponse = await axios.get('http://localhost:5000/story_management/addstory');
        const storiesData = storiesResponse.data;

        // Fetch categories
        const categoryResponse = await axios.get('http://localhost:5000/story_management/addcategory');
        const categoryData = categoryResponse.data;

        // Fetch keywords
        const keywordsResponse = await axios.get('http://localhost:5000/story_management/addkeyword');
        const keywordsData = keywordsResponse.data;

        // Combine stories with their categories and keywords
        const storiesWithDetails = storiesData.map(story => ({
          ...story,
          category: categoryData
            .filter(category => category.story_id === story.id)
            .map(category => category.name)
            .join(', '), // Join categories into a single string
          keywords: keywordsData
            .filter(keyword => keyword.story_id === story.id)
            .map(keyword => keyword.name)
            .join(', ') // Join keywords into a single string
        }));

        setStories(storiesWithDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div>
      <div>
        <h1>Story Management</h1>
        <button onClick={() => navigate('/addstory')}>Add Story</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Category</th>
            <th>Keyword</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stories.length > 0 ? (
            stories.map((story, index) => (
              <tr key={story.id || index}>
                <td>{index + 1}</td>
                <td>{story.title}</td>
                <td>{story.writer}</td>
                <td>{story.category}</td>
                <td>{story.keywords}</td>
                <td>{story.status}</td>
                <td>
                  <button onClick={() => navigate('/addstory')}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No stories available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
