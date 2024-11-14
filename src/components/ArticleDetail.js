import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useArticles } from "../services/ArticleContext";
import "../styles/ArticleDetail.css";

// =========================
// ArticleDetail Section Components
// =========================

const ArticleTitle = ({ title }) => <h1 className="article-title">{title}</h1>;

const ArticleImageSource = ({ source }) => (
  <div className="article-image-source-container">
    {source && source.logo_url && (
      <img
        src={source.logo_url}
        alt="Nguồn viết báo"
        className="image-source"
      />
    )}
  </div>
);

const ArticleTime = ({ pubDate }) => (
  <p className="article-time">{new Date(pubDate).toLocaleString()}</p>
);

const ArticleDescription = ({ description }) => (
  <p className="article-description">{description}</p>
);

const ArticleImageWithCaption = ({ image_url, title }) => (
  <div className="article-image-container">
    <img src={image_url} alt={title} className="article-image" />
  </div>
);

const ArticleContent = ({ content }) => (
  <div className="article-content">
    {content.split("\n").map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

// =========================
// Main Component
// =========================

const ArticleDetailSection = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { articlesList } = useArticles();

  // Thử lấy article từ location state (khi navigate từ danh sách)
  const articleFromState = location.state?.article;

  // Nếu không có trong state, tìm trong context
  const article =
    articleFromState || articlesList.find((a) => a.article_id === id);

  useEffect(() => {
    // Nếu không tìm thấy bài báo, chuyển về trang chủ
    if (!article) {
      navigate("/");
    }
  }, [article, navigate]);

  if (!article) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning" role="alert">
          Không tìm thấy bài báo! Đang chuyển về trang chủ...
        </div>
      </div>
    );
  }

  return (
    <div className="container article-detail mt-4">
      {/* Tiêu đề bài báo */}
      <ArticleTitle title={article.title} />

      <div className="d-flex align-items-center mb-3">
        {/* Hình ảnh nguồn viết báo */}
        <ArticleImageSource source={article.source} />

        {/* Thời gian */}
        <ArticleTime pubDate={article.pubDate} />
      </div>

      {/* Mô tả bài viết */}
      <ArticleDescription description={article.description} />

      {/* Hình ảnh chính */}
      {article.image_url && (
        <ArticleImageWithCaption
          image_url={article.image_url}
          title={article.title}
        />
      )}

      {/* Nội dung bài báo */}
      {article.content && <ArticleContent content={article.content} />}
    </div>
  );
};

export default ArticleDetailSection;
