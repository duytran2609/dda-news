import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Đường dẫn cho trang chủ */}
        <Route path="/" element={<HomePage />} />
        {/* Đường dẫn cho trang chi tiết bài báo */}
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;