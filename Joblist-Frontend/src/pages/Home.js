import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Welcome to Job-Port</h2>
      <div className="nav-buttons">
        <Link to="/add">Add Post</Link>
        <Link to="/search">Search Post</Link>
      </div>
    </motion.div>
  );
};

export default Home;
