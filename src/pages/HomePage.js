import React, { useState } from "react";
import Header from "../components/Header"; // Import từ components
import ArticleListSection from "../components/ArticleList";
import Footer from "../components/Footer";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State lưu trữ giá trị tìm kiếm

  return (
    <div>
      {/* Truyền searchQuery và setSearchQuery vào Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Truyền searchQuery xuống ArticleListSection để lọc bài báo */}
      <ArticleListSection searchQuery={searchQuery} />

      <Footer />
    </div>
  );
};

export default HomePage;
