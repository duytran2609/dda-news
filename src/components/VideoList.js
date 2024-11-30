import React, { useState, useEffect } from "react";
import "../styles/VideoListSection.css";

const VideoCard = ({ videoPath, videoTitle }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <video
          controls
          className="card-img-top"
          style={{ maxHeight: "200px", objectFit: "cover" }}
          onError={(e) => console.error("Lỗi tải video:", e.target.src)}
        >
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title text-truncate">{videoTitle}</h5>
        </div>
      </div>
    </div>
  );
};

const VideoList = ({ videos }) => (
  <div className="row">
    {videos.map((video, index) => (
      <VideoCard key={index} videoPath={video.path} videoTitle={video.title} />
    ))}
  </div>
);

const VideoListSection = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videoData = [
      {
        path: "/assets/VideoBao1.mp4",
        title: "Tình Hình Mưa Lũ Ở Trung Bộ Việt Nam",
      },
      {
        path: "/assets/VideoBao2.mp4",
        title: "Thị Trường Chứng Khoán Toàn Cầu Hôm Nay",
      },
      {
        path: "/assets/VideoBao3.mp4",
        title: "Cuộc Bầu Cử Tổng Thống Mỹ 2024: Những Diễn Biến Mới",
      },
      {
        path: "/assets/VideoBao4.mp4",
        title: "Cập Nhật Tình Hình Xung Đột Israel-Palestine",
      },
      {
        path: "/assets/VideoBao1.mp4",
        title: "Biến Đổi Khí Hậu: Cảnh Báo Mực Nước Biển Dâng",
      },
      {
        path: "/assets/VideoBao2.mp4",
        title: "Dự Báo Kinh Tế Việt Nam 2024: Những Thách Thức Mới",
      },
      {
        path: "/assets/VideoBao3.mp4",
        title:
          "Tình Hình Dịch Bệnh Covid-19: Những Biện Pháp Mới Của Chính Phủ",
      },
      {
        path: "/assets/4VideoBao.mp4",
        title: "Vấn Đề Biên Giới: Tình Hình Xung Đột Ở Biển Đông",
      },
      {
        path: "/assets/VideoBao1.mp4",
        title: "Sự Tăng Trưởng Của AI: Tác Động Đến Nền Kinh Tế Toàn Cầu",
      },
    ];

    setVideos(videoData);
  }, []);

  return (
    <div className="container mt-4">
      {videos.length > 0 ? (
        <VideoList videos={videos} />
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          Không có video nào để hiển thị
        </div>
      )}
    </div>
  );
};

export default VideoListSection;
