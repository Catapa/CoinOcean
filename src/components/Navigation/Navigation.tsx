import React from "react"
import styles from "./Navigation.module.css"
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <nav className={styles.navigation}>
                <Link to={"/wallet"}>Wallet</Link>
                {/*<Link to={"/account"}>Account</Link>*/}
        </nav>
    )
}
export default Navigation