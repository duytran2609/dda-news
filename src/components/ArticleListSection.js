import React from "react";
import "../styles/ArticleListSection.css";
import articles from "../data/ArticleFakeData";
import { Link } from "react-router-dom";

// Component ArticleCard
const ArticleCard = ({ article }) => (
  <div className="col-md-4">
    <Link to={`/article/${article.id}`} className="text-decoration-none">
      <div className="card mb-4">
        <img
          src={article.imageArticle}
          className="card-img-top"
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <div className="d-flex align-items-center mb-2">
            <img
              src={article.sourceLogo}
              alt="Logo nguồn báo"
              className="source-logo me-2"
            />
            <small className="text-muted">{article.time}</small>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

// Component ArticleList
const ArticleList = () => (
  <div className="row">
    {articles.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </div>
);

// Component Content Chính
const ArticleListSection = () => {
  return (
    <div className="container mt-4">
      <ArticleList />
    </div>
  );
};

export default ArticleListSection;
