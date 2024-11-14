import React, { createContext, useState, useContext } from "react";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articlesList, setArticlesList] = useState([]);

  const value = {
    articlesList,
    setArticlesList,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticles must be used within an ArticleProvider");
  }
  return context;
};
