import React, { useState } from 'react';
import VideoSections from './VideoSections';
import './VideoPage.css'; // Import the external CSS file

function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="video-page">
      <h1>Video Gallery</h1>
      <VideoSections onVideoClick={handleOpenVideo} />

      {selectedVideo && (
        <div className="video-popup">
          <div className="video-overlay" onClick={handleCloseVideo}></div>
          <div className="video-container">
            <button onClick={handleCloseVideo} className="close-button">&times;</button>
            <video src={selectedVideo} controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPage;
