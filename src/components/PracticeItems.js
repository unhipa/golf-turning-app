import React from 'react';
import './PracticeItems.css'; // CSSファイルをインポート

const videos = [
  { id: '1', title: 'Video 1', url: 'https://www.youtube.com/watch?v=AOMFSI45EtI' },
  { id: '2', title: 'Video 2', url: 'https://www.youtube.com/watch?v=orRLOLAskgg' },
  { id: '3', title: 'Video 3', url: 'https://www.youtube.com/watch?v=HSBuBdccjR0' },
  { id: '4', title: 'Video 4', url: 'https://www.youtube.com/watch?v=kFRHv0vwUog' },
  { id: '5', title: 'Video 5', url: 'https://youtu.be/fAtqSbHnp20?si=eYTTfMLe1Yf_WTnD' },
  { id: '6', title: 'Video 6', url: 'https://youtu.be/kwnC3RB8nGc?si=CX8tkwBBUe4VvIi5' },
];

const getVideoId = (url) => {
  const urlObj = new URL(url);
  if (urlObj.hostname === 'youtu.be') {
    return urlObj.pathname.slice(1); // ショートURL形式の場合
  } else {
    return urlObj.searchParams.get('v'); // 標準URL形式の場合
  }
};

const PracticeItems = () => {
  return (
    <div className="practice-items-container">
      {videos.map(video => {
        const videoId = getVideoId(video.url);
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`; // サムネイルURLを生成
        return (
          <div key={video.id} className="video-item">
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img src={thumbnailUrl} alt={video.title} className="video-thumbnail" />
              <p className="video-title">{video.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PracticeItems;
