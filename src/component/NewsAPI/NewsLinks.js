import React from 'react';
import '../News.css';

const NewsLink = props => {
    if (props.news.articles.length > 0 ) {
        return (
            <div className="news-container">
                <article className="news-section1">
                    <img className="news-icon1" src="./assets/crypto2.png" alt="icon for news"/>
                    <div className="clickable-section">
                        <h4>News of The Day</h4>
                        <p className="news-content1">{props.news.articles[0].title}</p>
                        <a href={props.news.articles[0].url}>News Links</a>   
                    </div>
                </article>

                <article className="news-section2">
                    <img className="news-icon2" src="./assets/icon copy.png" alt="icon for news" />
                    <div className="clickable-section">
                        <h4>News of The Day</h4>
                        <p className="news-content2">{props.news.articles[1].title}</p>
                        <a href={props.news.articles[1].url}>News Links</a>   
                    </div>
                </article>

                <article className="news-section3">
                    <img className="news-icon3" src="./assets/icon.png" alt="icon for news" />
                    <div className="clickable-section">
                        <h4>News of The Day</h4>
                        <p className="news-content3">{props.news.articles[2].title}</p>
                        <a href={props.news.articles[2].url}>News Links</a>   
                    </div>
                </article>
            </div>        
        )
    }
    return <div></div>

}

export default NewsLink;