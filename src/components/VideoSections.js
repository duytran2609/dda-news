import React from 'react';
import './VideoSections.css';

function VideoSections() {
  const videos = [
    { src: '/path/to/video1.mp4', thumbnail: '/path/to/thumbnail1.jpg', title: 'Video 1' },
    { src: '/path/to/video2.mp4', thumbnail: '/path/to/thumbnail2.jpg', title: 'Video 2' },
    { src: '/path/to/video3.mp4', thumbnail: '/path/to/thumbnail3.jpg', title: 'Video 3' },
  ];

  // Function to handle fullscreen playback
  const handleVideoClick = (videoSrc) => {
    const videoElement = document.createElement('video');
    videoElement.src = videoSrc;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    
    // Request fullscreen
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.className = 'fullscreen-video';
    fullscreenDiv.appendChild(videoElement);
    document.body.appendChild(fullscreenDiv);

    // Fullscreen exit listener
    fullscreenDiv.onclick = () => {
      document.body.removeChild(fullscreenDiv);
    };
  };

  return (
    <div className="video-sections">
      {videos.map((video, index) => (
        <div key={index} className="video-card" onClick={() => handleVideoClick(video.src)}>
          <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
          <p className="video-title">{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoSections;
