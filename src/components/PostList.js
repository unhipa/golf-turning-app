import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import PostItem from './PostItem';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data);
    }
  };

  return (
    <div>
      <h1>投稿一覧</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
