import React from 'react';
import styles from './TrendingCoinCard.module.css';
import type {TrendingCoinType} from "../TrendingCoins";
import {useNavigate} from "react-router";

interface propType {
    coinData: TrendingCoinType
}

const TrendingCoinCard = (props: propType) => {
    const navigate = useNavigate();
    const gotoDetailPage = (id: string) => {
        navigate(`/${id}`);
    }
    return (
        <div className={styles.coin_card} onClick={() => gotoDetailPage(props.coinData.id)}>
            <img src={props.coinData.large} alt={'Coin Logo'} className={styles.coin_image}/>
            <span className={styles.coin_symbol}>{props.coinData.symbol}</span>
            <span className={styles.coin_name}>{props.coinData.name}</span>
            <span className={styles.coin_score}>#{props.coinData.score + 1}</span>
        </div>
    );
}
export default TrendingCoinCard;