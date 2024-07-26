import React from 'react';
import './PracticeItems.css'; // CSSファイルをインポート

const videos = [
  { id: '1', title: 'Video 1', thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/0.jpg', url: 'https://www.youtube.com/watch?v=VIDEO_ID_1' },
  { id: '2', title: 'Video 2', thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg', url: 'https://www.youtube.com/watch?v=VIDEO_ID_2' },
  { id: '3', title: 'Video 3', thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_3/0.jpg', url: 'https://www.youtube.com/watch?v=VIDEO_ID_3' },
  { id: '4', title: 'Video 4', thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_4/0.jpg', url: 'https://www.youtube.com/watch?v=VIDEO_ID_4' },
  { id: '5', title: 'Video 5', thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_5/0.jpg', url: 'https://www.youtube.com/watch?v=VIDEO_ID_5' },
  { id: '6', title: 'Video 6', thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_6/0.jpg', url: 'https://www.youtube.com/watch?v=VIDEO_ID_6' },
];

const PracticeItems = () => {
  return (
    <div className="practice-items-container">
      {videos.map(video => (
        <div key={video.id} className="video-item">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p className="video-title">{video.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PracticeItems;
