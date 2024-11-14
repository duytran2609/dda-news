import React, { useState, useEffect } from "react";
import "../styles/ArticleListSection.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useArticles } from "../services/ArticleContext";

// Component ArticleCard
const ArticleCard = ({ article }) => {
  const formattedDate = new Date(article.pubDate).toLocaleString();

  return (
    <div className="col-md-4">
      <Link
        to={`/article/${article.article_id}`}
        className="text-decoration-none"
        state={{ article }} // Truyền dữ liệu qua state của Link
      >
        <div className="card mb-4">
          <img
            src={article.image_url}
            className="card-img-top"
            alt={article.title}
          />
          <div className="card-body">
            <h5
              className="card-title text-truncate"
              style={{ WebkitLineClamp: 2 }}
            >
              {article.title}
            </h5>
            <div className="d-flex align-items-center mb-2">
              {article.source && article.source.logo_url && (
                <img
                  src={article.source.logo_url}
                  alt="Logo nguồn báo"
                  className="source-logo me-2"
                />
              )}
              <small className="text-muted">{formattedDate}</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Component ArticleList
const ArticleList = ({ articles }) => (
  <div className="row">
    {articles.map((article, index) => (
      <ArticleCard key={article.article_id || index} article={article} />
    ))}
  </div>
);

// Component Content Chính
const ArticleListSection = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { setArticlesList } = useArticles();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/latest?country=vi&apikey=pub_474824b746e202c2a0b43d792d0ffd0831b79"
        );
        const fetchedArticles = response.data.results.slice(0, 9);
        setArticles(fetchedArticles);
        setArticlesList(fetchedArticles); // Lưu vào context
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [setArticlesList]);

  useEffect(() => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchQuery, articles]);

  const articlesToDisplay = searchQuery ? filteredArticles : articles;

  return (
    <div className="container mt-4">
      {articlesToDisplay.length > 0 ? (
        <ArticleList articles={articlesToDisplay} />
      ) : (
        searchQuery && (
          <div className="alert alert-warning text-center" role="alert">
            Không có bài báo phù hợp
          </div>
        )
      )}
    </div>
  );
};

export default ArticleListSection;
