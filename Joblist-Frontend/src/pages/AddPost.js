import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { motion } from 'framer-motion';


const AddPost = () => {
  const [form, setForm] = useState({
    profile: '',
    desc: '',
    exp: '',
    techs: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, techs: form.techs.split(',').map(t => t.trim()) };
    await axios.post('http://localhost:8080/post', payload);
    alert("Post added!");
    setForm({ profile: '', desc: '', exp: '', techs: '' });
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div style={{ padding: '40px' }}>
      <h2>Add Job Post</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Profile" value={form.profile} onChange={e => setForm({ ...form, profile: e.target.value })} /><br /><br />
        <textarea placeholder="Description" value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} /><br /><br />
        <input type="number" placeholder="Experience (years)" value={form.exp} onChange={e => setForm({ ...form, exp: e.target.value })} /><br /><br />
        <input placeholder="Technologies (comma separated)" value={form.techs} onChange={e => setForm({ ...form, techs: e.target.value })} /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </motion.div>
  );
};

export default AddPost;
