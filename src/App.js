import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const Home = () => <div>HOME</div>;
const PracticeItems = () => <div>練習アイテム</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-form" element={<PostForm />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/practice-items" element={<PracticeItems />} />
        </Routes>
        <MenuBar />
      </div>
    </Router>
  );
}

export default App;
