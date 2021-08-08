import axios from 'axios';
import React from 'react';
import BitCoin from '../BitCoin';

class GlobalFetch extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            global: {
                data: {
                    total_market_cap: {},
                    total_volume: {}
                }
            }
        }
        
    }
    
    
    componentDidMount() {
        axios.get(`https://api.coingecko.com/api/v3/global`)
        .then (response => { this.setState({ global: response.data})
        });
    };

    getTotalMarketCap() {
        const totalMarketCap = Object.values(this.state.global.data.total_market_cap).reduce((t, n) => t + n ,0)
        return (totalMarketCap/100000000000000).toFixed(2);
    }

    getMarketCap24h() {
        const marketCap24h = Object.values(this.state.global.data.total_volume).reduce((t, n) => t + n ,0)
        return (marketCap24h/100000000000000).toFixed(2);
    }

    render () {
        return (
            <div>
                 <main className="wrapper">
                    <section>
                        <h2>Crypto Prices, Charts, Lists & Crypto Market News</h2>
                        <div className="global-market">
                        <article>
                            <p>Total Market Cap <span>&#x25BC;</span></p>
                            <h3>{this.getTotalMarketCap()} B</h3>
                            <p>USD ($)</p>
                        </article>
                        <article>
                            <p>24h Volume <span>&#x25BC;</span> </p>
                            <h3>{this.getMarketCap24h()} B</h3>
                            <p>USD ($)</p>
                        </article>
                        <article>
                            <p>Bitcoin Price <span>&#x25BC;</span></p>
                            <BitCoin coin={this.props.data}/>
                            <p>USD ($)</p>
                        </article>
                        </div>
                    </section>
                 </main>
            </div>
        );
    }
}

export default GlobalFetch;




