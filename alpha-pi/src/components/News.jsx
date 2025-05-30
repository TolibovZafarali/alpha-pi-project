import data from "../data/NewsData.json"
import Footer from "./Footer";
import Header from "./Header";
import "./News.css"

const News = () => {
    return (
        <div className="wrapper">
            <Header />

            <main className="news-main">
                <h1>News:</h1>
                
                <div className="news-layout">
                    {data.map((news) => (
                        <a href={news.link} target="_blank" rel="noopener noreferrer">
                            <button className="news-btn">
                                <div className="news-btn-content">
                                    <h5>{news.company}</h5>
                                    <p>{news.title}</p>
                                </div>
                            </button>
                        </a>                    
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
 
export default News;