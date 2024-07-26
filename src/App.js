import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Home from './components/Home';
import PracticeItems from './components/PracticeItems'; // PracticeItemsコンポーネントをインポート

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-form" element={<PostForm />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/practice-items" element={<PracticeItems />} /> {/* PracticeItemsルートを追加 */}
        </Routes>
        <MenuBar />
      </div>
    </Router>
  );
}

export default App;
