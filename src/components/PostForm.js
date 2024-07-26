import React, { useState } from 'react';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('posts')
      .insert([{ name, title, content }]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      navigate('/post-list');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名前（15文字まで）:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="15"
          required
        />
      </div>
      <div>
        <label>タイトル（20文字まで）:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="20"
          required
        />
      </div>
      <div>
        <label>投稿内容（100文字まで）:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength="100"
          required
        />
      </div>
      <button type="submit">投稿</button>
    </form>
  );
};

export default PostForm;
