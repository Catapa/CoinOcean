import React, {useEffect, useState} from "react";
import styles from "./HomePage.module.css";
import {api} from "../../api/api";
import {home_page_table_config} from "../../utils/table_configs";
import { TrendingCoins, Table } from "src/components";
const HomePage = () => {
    const [tableData, setTableData] = useState({});
    const [page, setPage] = useState(1);
    const API = new api.CoinGecko();
    useEffect(() => {
        (async () => {
            try {
                const response = await API.get.coins_markets('usd', 'market_cap_desc', page);
                setTableData(() => response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page]);

    const changePage = (callbackResult: number) => {
        const toPage = callbackResult;
        setPage(toPage);
    };
    return (
        <div className={styles.home_page_container}>
            <TrendingCoins/>
            <Table fields={home_page_table_config} data={tableData} onPageSelect={changePage}/>
        </div>
    );
};
export default HomePage;