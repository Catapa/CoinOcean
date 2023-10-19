import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <span className={styles.main}>CoinOcean &#8482;</span>
            <span className={styles.secondary}>Catalin Pap &#169;</span>
            <span className={styles.secondary}>2022</span>
        </section>
    );
}
export default Footer;