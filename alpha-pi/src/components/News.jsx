import { useEffect, useState } from "react"
import backupData from "../data/NewsData.json"
import Footer from "./Footer"
import Header from "./Header"
import "./News.css"

const News = () => {
    const [ articles, setArticles ] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_GNEWS_API_KEY
            if (!apiKey) {
                setArticles(backupData)
                return
            }

            const API_URL = `https://gnews.io/api/v4/search?q=small%20business&lang=en&token=${apiKey}`

            try {
                const res = await fetch(API_URL)
                if (!res.ok) throw new Error('Failed to fetch')
                const json = await res.json()
                if (json.articles) {
                    setArticles(json.articles)
                } else {
                    setArticles(backupData)
                }
            } catch (_) {
                setArticles(backupData)
            }
        }

        fetchNews()
    }, [])

    return (
        <div className="wrapper">
            <Header />

            <main className="news-main">
                <h1>News:</h1>

                <div className="news-layout">
                    {articles.map((news, index) => (
                        <a key={index} href={news.url || news.link} target="_blank" rel="noopener noreferrer">
                            <button className="news-btn">
                                <div className="news-btn-content">
                                    <h5>{news.source?.name || news.company}</h5>
                                    <p>{news.title}</p>
                                </div>
                            </button>
                        </a>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}export default News;
