import React from "react"
import styles from "./Header.module.css"
import Navigation from "../Navigation/Navigation";
import {useNavigate} from "react-router";
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <h1 className={styles.title} onClick={() => navigate("/")}>CoinOcean</h1>
            <Navigation/>
        </header>
    )
}
export default Header