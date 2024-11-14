.video-sections {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .video-card {
    cursor: pointer;
    text-align: center;
    max-width: 200px;
  }
  
  .video-thumbnail {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .video-card:hover .video-thumbnail {
    transform: scale(1.05);
  }
  
  .video-title {
    margin-top: 8px;
    font-size: 16px;
    color: #333;
  }
  
  /* Fullscreen video container */
  .fullscreen-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }