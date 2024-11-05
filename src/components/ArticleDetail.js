import React from "react";
import { useParams } from "react-router";
import articles from "../data/ArticleFakeData";
import "../styles/ArticleDetail.css";

// =========================
// ArticleDetail Section Components
// =========================

const ArticleTitle = ({ title }) => <h1 className="article-title">{title}</h1>;

const ArticleImageSource = ({ sourceLogo }) => (
  <div className="article-image-source-container">
    <img src={sourceLogo} alt="Nguồn viết báo" className="image-source" />
  </div>
);

const ArticleTime = ({ time }) => <p className="article-time">{time}</p>;

const ArticleDescription = ({ description }) => (
  <p className="article-description">{description}</p>
);

const ArticleImageWithCaption = ({ imageArticle, imageCaption, title }) => (
  <div className="article-image-container">
    <img src={imageArticle} alt={title} className="article-image" />
    {imageCaption && <p className="image-caption">{imageCaption}</p>}
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

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Article not found!</p>;
  }

  // Kiểm tra xem thuộc tính content có tồn tại không
  if (!article.content) {
    return <p>Content not available!</p>;
  }

  return (
    <div className="container article-detail mt-4">
      {/* Tiêu đề bài báo */}
      <ArticleTitle title={article.title} />

      {/* Hình ảnh nguồn viết báo */}
      <ArticleImageSource sourceLogo={article.sourceLogo} />

      {/* Thời gian */}
      <ArticleTime time={article.time} />

      {/* Mô tả bài viết */}
      <ArticleDescription description={article.description} />

      {/* Hình ảnh chính với chú thích */}
      <ArticleImageWithCaption
        imageArticle={article.imageArticle}
        imageCaption={article.imageCaption}
        title={article.title}
      />

      {/* Nội dung bài báo */}
      <ArticleContent content={article.content} />
    </div>
  );
};

export default ArticleDetail;
