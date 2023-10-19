import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {api} from "../../api/api";
import styles from './CoinDetailPage.module.css'
import ChangeIntervalButtons from "../../components/ChangeIntervalButtons/ChangeIntervalButtons";
import {clearHTML, formatNumber} from "../../utils/utils";
import type {TCoin} from "../../utils/utils";
import PriceHistoryChart from "../../components/PriceHistoryChart/PriceHistoryChart";

const CoinDetailPage = () => {
    const {coinID} = useParams();
    let [coin, setCoin] = useState<TCoin | undefined>(undefined);
    const API = new api.CoinGecko();
    useEffect(() => {
        API.get.coins_id(coinID)
            .then(response => {
                setCoin(response);

            })
            .catch(error => {
                console.error(error);
                throw error;
            })
    }, [])

    let [priceChange, setPriceChange] = useState(((coin?.market_data) && coin?.market_data.price_change_percentage_24h_in_currency.usd) || 0);
    const getPriceChange = (callBackResult: string) => {
        let resultStr: string = `coin.market_data.price_change_percentage_${callBackResult}_in_currency.usd`;
        let result = eval(resultStr)
        setPriceChange(result);
    }

    const priceStyles = () => {
        let classes = [styles.price];
        classes.push(priceChange > 0 ? styles.green : styles.red);
        return classes.join(' ');
    }

    return (
        <div className={styles.grid_container}>
            <span className={styles.top_bar}>
                <img className={styles.logo} src={(coin?.image) && coin.image.small} alt={'logo'}/>
                <h2 className={styles.title}>{coin?.name}</h2>
                <span className={styles.symbol}>({coin?.symbol})</span>
                <span className={priceStyles()}>{(coin?.market_data) && coin?.market_data.current_price.usd}({formatNumber(priceChange)}%)</span>
                <ChangeIntervalButtons onChangeInterval={getPriceChange}/>
            </span>
            <aside className={styles.stats}>
                <span>Market Cap Rank: {coin?.market_cap_rank}</span>
                <span>Market cap: {(coin?.market_data) && coin.market_data.market_cap.usd}</span>
                <span>Circulating Supply: {(coin?.market_data) && coin.market_data.circulating_supply}/{(coin?.market_data) && coin.market_data.max_supply}</span>
                <span>All Time High: {(coin?.market_data) && coin.market_data.ath.usd}</span>
                <span>Since ATH: {(coin?.market_data) && coin.market_data.ath_change_percentage.usd}</span>
                <span>All Time Low: {(coin?.market_data) && coin.market_data.atl.usd}</span>
                <span>Since ATL: {(coin?.market_data) && coin.market_data.atl_change_percentage.usd}</span>
                <span>Liquidity Score: {coin?.liquidity_score}</span>
            </aside>
            <div className={styles.description}>&emsp;{(coin?.description) && clearHTML(coin.description.en)}</div>
            <PriceHistoryChart coinID={coinID} coinName={coin?.name}/>
        </div>
    )
}
export default CoinDetailPage