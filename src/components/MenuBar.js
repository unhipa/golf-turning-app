import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import homeIcon from '../assets/HOME-removebg-preview.png';
import boardIcon from '../assets/投稿-removebg-preview.png';
import listIcon from '../assets/投稿一覧２-removebg-preview.png';
import practiceIcon from '../assets/練習アイテム２-removebg-preview.png';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="/">
        <img src={homeIcon} alt="HOME" className="menu-icon" />
      </Link>
      <Link to="/post-form">
        <img src={boardIcon} alt="掲示板" className="menu-icon" />
      </Link>
      <Link to="/post-list">
        <img src={listIcon} alt="投稿一覧" className="menu-icon" />
      </Link>
      <Link to="/practice-items">
        <img src={practiceIcon} alt="練習アイテム" className="menu-icon" />
      </Link>
    </div>
  );
};

export default MenuBar;
