import React from "react";
import Header from "../components/Header"; // Import từ components
import ArticleListSection from "../components/ArticleListSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ArticleListSection />
      <Footer />
    </div>
  );
};

export default HomePage;
