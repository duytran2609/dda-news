import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import UtilityPage from "./pages/UtilityPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import { ArticleProvider } from "./services/ArticleContext";

const App = () => {
  return (
    <ArticleProvider>
      <Router>
        <Routes>
          {/* Đường dẫn cho trang chủ */}
          <Route path="/" element={<HomePage />} />
          {/* Đường dẫn cho trang video */}
          <Route path="/video" element={<VideoPage />} />
          {/* Đường dẫn cho trang tiện ích */}
          <Route path="/utility" element={<UtilityPage />} />
          {/* Đường dẫn cho trang chi tiết bài báo */}
          <Route path="/article/:id" element={<ArticleDetailPage />} />
        </Routes>
      </Router>
    </ArticleProvider>
  );
};

export default App;
