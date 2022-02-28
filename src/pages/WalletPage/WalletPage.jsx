import React, {useEffect, useState} from 'react';
import styles from './WalletPage.module.css';
import {api} from "../../api/api";

const WalletPage = () => {
    let [coinPrice, setCoinPrice] = useState('');
    let [selectedCoin, setSelectedCoin] = useState('');
    let [selectedAmount: number, setSelectedAmount] = useState();
    let [coinList, setCoinList] = useState([]);
    const API = new api.CoinGecko();
    useEffect(() => {
        API.get.coins_list()
            .then((response) => {
                // console.log('response - ', response);
                 setCoinList(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])


    useEffect(() => {
        API.get.simple_price(selectedCoin)
            .then(response => {
                Object.values(response).map(val => {
                    setCoinPrice(val.usd);
                })
            })
            .catch(error => {
                console.error(error);
            })

    }, [selectedCoin]);

    let coins_in_wallet = [
        {
            name: 'bitcoin',
            buy_price: 43000,
            current_price: 44000
        },
        {
            name: 'ethereum',
            buy_price: 2700,
            current_price: 2900
        }
    ]

    const addToWallet = (coinID: string) => {
        console.log('added ', coinID);
    }

    return (
        <div>
            <h2>(Page Under Construction)</h2>
            <h2 className={styles.title}>My Portfolio</h2>
            <div className={styles.add_coin_section}>
                <section>
                    <input  list={'coins'} type={'text'} placeholder={'Select Coin'} value={selectedCoin} onInput={e => {
                        const {value} = e.target;
                        console.log('value', value);
                        return setSelectedCoin(value);
                    }}/>
                    <datalist id={'coins'}>
                        {
                            coinList.map(coin =>
                                <option key={coin.id} data-value={coin.id} value={coin.id}>{coin.name}</option>
                            )
                        }

                    </datalist>
                    <br/>
                    <span>Price: {coinPrice}</span>
                </section><br/>
                <section>
                    <input type={'number'} placeholder={'Select Amount'} value={selectedAmount} onInput={e => {
                        const {value} = e.target;
                        return setSelectedAmount(value);
                    }}/>
                </section><br/>

                <section>
                    <span>Total: {coinPrice * selectedAmount}</span><br/>
                </section>

                <section>
                    <button className={styles.add_button} onClick={() => addToWallet()}>Add</button>
                </section>
            </div>
            {
                coins_in_wallet.map(coin => {
                    return (
                        <p key={coin.name}>{coin.name} - {coin.buy_price} - {coin.current_price}</p>
                    )
                })
            }
        </div>
    )
}
export default WalletPage;