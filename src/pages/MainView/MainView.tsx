import React from 'react';
import styles from './MainView.module.css';
import Header from "../../components/Header/Header";
import PageContent from "../../components/HigherOrderComponents/PageContent/PageContent";
import {Outlet} from "react-router";
import Footer from "../../components/Footer/Footer";

const MainView = () => {
    return (
        <div className={styles.page}>
            <Header/>
            <PageContent>
                <Outlet/>
            </PageContent>
            <Footer/>
        </div>
    )
};
export default MainView;