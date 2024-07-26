import React from 'react';
import './PracticeItems.css'; // CSSファイルをインポート

const videos = [
  { id: '1', title: 'Video 1', url: 'https://youtu.be/AOMFSI45EtI?si=H3tfjTALB2FqT54Q' },
  { id: '2', title: 'Video 2', url: 'https://youtu.be/orRLOLAskgg?si=nKX7dq-cHk6-gSeZ' },
  { id: '3', title: 'Video 3', url: 'https://youtu.be/HSBuBdccjR0?si=FZistVDOySM2Glak' },
  { id: '4', title: 'Video 4', url: 'https://youtu.be/kFRHv0vwUog?si=S8pRWTWfAefITWV1' },
  { id: '5', title: 'Video 5', url: 'https://youtu.be/fAtqSbHnp20?si=eYTTfMLe1Yf_WTnD' },
  { id: '6', title: 'Video 6', url: 'https://youtu.be/kwnC3RB8nGc?si=CX8tkwBBUe4VvIi5' },
];

const getVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1); // ショートURL形式の場合
    } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      return urlObj.searchParams.get('v'); // 標準URL形式の場合
    }
  } catch (error) {
    console.error('Invalid URL:', url);
    return null;
  }
  return null;
};

const PracticeItems = () => {
  return (
    <div className="practice-items-container">
      {videos.map(video => {
        const videoId = getVideoId(video.url);
        if (!videoId) {
          console.error('Invalid video ID for URL:', video.url);
          return null;
        }
        const embedUrl = `https://www.youtube.com/embed/${videoId}`; // 埋め込みURLを生成
        return (
          <div key={video.id} className="video-item">
            <iframe
              width="560"
              height="315"
              src={embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PracticeItems;
