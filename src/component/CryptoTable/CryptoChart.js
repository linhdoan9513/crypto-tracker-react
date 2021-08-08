import React from 'react'; 
import { Line } from "react-chartjs-2";

class CryptoChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                labels: [],
                datasets: [
                  {
                    label: `$`,
                    data: [60,70,90,100],
                    fill: false,
                    borderColor: 'rgb(253, 194, 66)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointRadius: 0,
                  }
                ]
            }
        }
    }

    getDataPoints() {
        const unsortedData = this.props.coin.sparkline_in_7d.price
        return unsortedData
    }

    getLabels() {
        const totalTimePoints = this.props.coin.sparkline_in_7d.price
        const currentTimeStamp = new Date();
        const label = [];
        for (let i = 0; i < totalTimePoints.length; i++) {
           let timestamp = currentTimeStamp - i*60*60*1000;
           let date = new Date(timestamp);
           label.push(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
        }
        return label.reverse();
    }

    componentDidMount() {
        this.setState({
            data : {
                labels: this.getLabels(),
                datasets: [
                  {
                    label: `$`,
                    data: this.getDataPoints(),
                    fill: false,
                    borderColor: 'rgb(253, 194, 66)',
                    borderWidth: 2,
                    tension: 0.1,
                    pointRadius: 0,
                  }
                ]
            },
            options: {
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    }

                },
                plugins: {
                    legend: {
                        display: false,
                    }
                }
            }
        })
    }
    
    render() {
        return (
            <div className="chart-container">
                <Line data={this.state.data} options={this.state.options}/>
            </div>
               
        )
    }
}

export default CryptoChart;

