import axios from 'axios';
import React from 'react';
import NewsLink from './NewsLinks';


class NewsFetch extends React.Component {
    state = {
        news: {
            articles: [],
        }
    }
    
    componentDidMount() {
        axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`)
        .then (response => { this.setState({ news: response.data})
        });
    };

    render () {
        return (
            <header className="wrapper">
                <h1>Top Business News Today</h1>
                <NewsLink news={this.state.news} />
            </header>
        );
    }
}

export default NewsFetch;
