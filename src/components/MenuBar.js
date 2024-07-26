import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="/">HOME</Link>
      <Link to="/post-form">掲示板</Link>
      <Link to="/post-list">投稿一覧</Link>
      <Link to="/practice-items">練習おもちゃ</Link>
    </div>
  );
};

export default MenuBar;
