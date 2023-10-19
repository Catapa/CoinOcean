import React, {useEffect, useState} from 'react';
import styles from './TrendingCoins.module.css';
import {api} from "../../api/api";
import TrendingCoinCard from "./TrendingCoinCard/TrendingCoinCard";

export type TTrendingCoin  = {
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
};
type TTrendingResponse = {
    coins: Array<{
        item: TTrendingCoin
    }>,
    exchanges: []
};

const TrendingCoins = () => {
    const API = new api.CoinGecko();
    let [trending, setTrending] = useState<TTrendingResponse>();
    useEffect(() => {
        API.get.search_trending()
            .then((response: TTrendingResponse) => {
                setTrending(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);
    return (
        <section>
            <h2 className={styles.trending_coins_label}>Trending Searches (last 24h)</h2>
            <div className={styles.trending_coins_container}>
                {(trending?.coins) && trending?.coins.map(({item}) =>
                    <TrendingCoinCard key={item.id} coinData={item}/>
                )
                }
            </div>
        </section>
    );
};
export default TrendingCoins;