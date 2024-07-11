import "./Fetch.css";

import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

import { API_KEY } from "./Env";

interface IArticle {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

interface ISource {
  id: string;
  name: string;
}

interface FetchProps {
  search: string;
  language: string;
}

const Fetch: React.FC<FetchProps> = ({ search, language }) => {
  const [articleData, setArticleData] = useState<IArticle[] | null>(null);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&language=${language}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => setArticleData(data.articles))
      .catch((err) => console.error("Fehler beim Fetchen:", err));
  }, []);

  return (
    <section className="wrapper">
      <h4>News </h4>
      <div className="news">
        {articleData ? (
          articleData.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage} alt="newsImage" />
              <h5>{article.title}</h5>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default Fetch;
