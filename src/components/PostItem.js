import React, { useState, useEffect, useCallback } from 'react';
import supabase from '../supabaseClient';

const PostItem = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [commenter, setCommenter] = useState('');

  const fetchComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', post.id)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data);
    }
  }, [post.id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleLike = async () => {
    const { error } = await supabase
      .from('posts')
      .update({ likes: likes + 1 })
      .eq('id', post.id);

    if (error) {
      console.error('Error updating likes:', error);
    } else {
      setLikes(likes + 1);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const { error, data } = await supabase
      .from('comments')
      .insert([{ post_id: post.id, name: commenter, content: comment }]);

    if (error) {
      console.error('Error inserting comment:', error);
    } else if (data) {
      setComments([...comments, data[0]]);
      setComment('');
      setCommenter('');
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>投稿者: {post.name}</p>
      <p>投稿日時: {new Date(post.created_at).toLocaleString()}</p>
      <button onClick={handleLike}>いいね ({likes})</button>
      <div>
        <h3>コメント</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content} - {comment.name}</p>
            <p>投稿日: {new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <div>
            <label>名前（15文字まで）:</label>
            <input
              type="text"
              value={commenter}
              onChange={(e) => setCommenter(e.target.value)}
              maxLength="15"
              required
            />
          </div>
          <div>
            <label>コメント（100文字まで）:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength="100"
              required
            />
          </div>
          <button type="submit">コメントを追加</button>
        </form>
      </div>
    </div>
  );
};

export default PostItem;
