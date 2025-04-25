import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../App.css';

const SearchPost = () => {
  const [text, setText] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (text) {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/posts/${text}`);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Search Job Posts</h2>
      <input
        type="text"
        placeholder="Search by keywords (e.g., Java, Spring)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>

      <div className="job-results">
        {jobs.length === 0 && !isLoading && (
          <p>No job posts found. Try a different search term.</p>
        )}
        {jobs.length > 0 && (
          <div className="job-list">
            {jobs.map((job, index) => (
              <div key={index} className="job-box">
                <h3>{job.profile}</h3>
                <p><strong>Description:</strong> {job.desc}</p>
                <p><strong>Experience:</strong> {job.exp} years</p>
                <p><strong>Technologies:</strong> {job.techs.join(', ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SearchPost;