import React, {useEffect, useState} from 'react';
import styles from './TrendingCoins.module.css';
import {api} from "../../api/api";
import TrendingCoinCard from "./TrendingCoinCard/TrendingCoinCard";

export interface TrendingCoinType {
    coin_id: number,
    id: string,
    large: string,
    market_cap_rank: number,
    name: string,
    price_btc: number,
    score: number,
    slug: string,
    small: string,
    symbol: string,
    thumb: string
}
interface TrendingResponseType {
    coins: Array<{
        item: TrendingCoinType
    }>,
    exchanges: []
}

const TrendingCoins = () => {
    const API = new api.CoinGecko();
    let [trending: TrendingResponseType, setTrending] = useState({});
    useEffect(() => {
        API.get.search_trending()
            .then((response:TrendingResponseType) => {
                setTrending(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    return (
        <section>
            <h2 className={styles.trending_coins_label}>Trending Searches (last 24h)</h2>
            <div className={styles.trending_coins_container}>
                {(trending.coins) && trending.coins.map(({item}) =>
                    <TrendingCoinCard key={item.id} coinData={item}/>
                )
                }
            </div>
        </section>

    )
}
export default TrendingCoins