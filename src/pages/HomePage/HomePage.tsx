import React, {useEffect, useState} from "react";
import styles from "./HomePage.module.css";
import {api} from "../../api/api";
import {home_page_table_config} from "../../components/Miscelaneous/table_configs";
import Table from "../../components/Table/Table";
import TrendingCoins from "../../components/TrendingCoins/TrendingCoins";
const HomePage = () => {
    let [tableData, setTableData] = useState({});
    let [page, setPage] = useState('1');
    let Api = new api.CoinGecko();
    useEffect(() =>
            Api.get.coins_markets('usd', 'market_cap_desc', page)
                .then(response => {
                    setTableData(response);
                })
                .catch(error => {
                    console.error(error);
                    throw(error);
                })
        ,[page]);

    const changePage = (callbackResult: string) => {
        const toPage = callbackResult;
        setPage(toPage);
    }
    return (
        <div className={styles.home_page_container}>
            <TrendingCoins/>
            <Table fields={home_page_table_config} data={tableData} onPageSelect={changePage}/>
        </div>
    );
}
export default HomePage;