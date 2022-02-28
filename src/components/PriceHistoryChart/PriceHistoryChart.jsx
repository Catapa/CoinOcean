import React, {useEffect, useState} from 'react';
import styles from './PriceHistoryChart.module.css';
import {api} from "../../api/api";
import {Line} from "react-chartjs-2";
import {CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from "chart.js";


const PriceHistoryChart = ({coinID, coinName}) => {

    const API = new api.CoinGecko();
    let [marketData, setMarketData] = useState(
        {
            market_caps: [],
            prices: [],
            total_volumes: []
        }
        );
    useEffect(() => {
        API.get.coins_id_market_chart(coinID)
            .then(response => {
                setMarketData(response);
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }, []);
    let [pricesState, setPricesState] = useState([]);
    let [datesState, setDatesState] = useState([]);
    const parsePrices = (priceData: Array<number>[]) => {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dates: number[] = [];
        let prices: number[] = [];
        priceData.map(([date, price]) => {
            let parsedDate = new Date(date);
            dates.push(`${months[parsedDate.getMonth()]}/${parsedDate.getFullYear()}`);
            prices.push(price);
        })
        setPricesState(prices);
        setDatesState(dates);
    };
    useEffect(() => {
        parsePrices(marketData.prices);
    }, [marketData]);

    Chart.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    );
    Chart.defaults.font.size = 18;
    const chartData = {
        labels: datesState, //['a','b','c','d','e','f','g'],
        datasets: [
            {
                label: coinName,
                data: pricesState, //[1,3,2,10,5,6,5],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 0
            },
        ]
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 18
                    }
                }
            },
            title: {
                display: true,
                text: 'Price History',
            },
            labels: {
                font: {
                    size: 18
                }
            },
        },
        normalized: true,
        showLine: true,
        spanGaps: true,

    }
    return (
            <Line className={styles.chart} data={chartData} options={chartOptions}/>
    )
}

export default PriceHistoryChart