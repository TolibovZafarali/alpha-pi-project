// filepath: [News.jsx](http://_vscodecontentref_/7)
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./News.css";

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_GNEWS_API_KEY;            ;
            if (!apiKey) {
                console.error("API key is missing");
                return;
            }

            const API_URL = `https://gnews.io/api/v4/search?q=small+business&lang=en&apikey=${apiKey}`;

            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error("Failed to fetch");
                const json = await res.json();
                console.log("API Response:", json);
                if (json.articles) {
                    setArticles(json.articles);
                    console.log("Articles:", json.articles);
                } else {
                    console.error("No articles found in the response");
                }
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="wrapper">
            <Header />

            <main className="news-main">
                <h1>News:</h1>

                <div className="news-layout">
                    {articles.length > 0 ? (
                        articles.map((news, index) => (
                            <a
                                key={index}
                                href={news.url || news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-btn"
                            >
                                <div className="news-btn-content">
                                    <h5>{news.source?.name || "Unknown Source"}</h5>
                                    <p>{news.title || "No Title Available"}</p>
                                </div>
                            </a>
                        ))
                    ) : (
                        <p>No news articles available.</p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default News;