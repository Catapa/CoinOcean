import React, {useState} from 'react';
import styles from './Pagination.module.css';
import {range} from "../../utils/utils";
const Pagination = ({onPageSelect}: EventHandlerNonNull) => {
    const first_page = 1;
    const last_page = 100;
    const pages: number[] = range(first_page, last_page);
    let [currentPage: number, setCurrentPage] = useState(pages[0]);
    const display_pages_count = 10;
    let display_pages: number[] = (currentPage - display_pages_count/2 < first_page) ?
                                        range(first_page, display_pages_count)
                                        : (currentPage + display_pages_count/2 - 1 > last_page) ?
                                            range(last_page - display_pages_count + 1,last_page)
                                            : range(currentPage - display_pages_count/2, currentPage + display_pages_count/2 - 1);

    const getPage = (page: number) => {
        setCurrentPage(page);
        console.log('active page: ', currentPage);
        return onPageSelect(page);
    }
    const getStyles = (page: number) => {
        let classes = [styles.pagination_item];
        classes.push(page === currentPage ? styles.active : '');
        return classes.join(' ');
    }
    const goNextPage = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= last_page)
            setCurrentPage(nextPage);
        return onPageSelect(nextPage);
    }
    const goPrevPage = () => {
        const prevPage = currentPage - 1;
        if (prevPage >= first_page)
            setCurrentPage(prevPage);
        return onPageSelect(prevPage);
    }
    return (
        <nav className={styles.pagination_section}>
            <ul className={styles.pagination}>
                <li className={styles.pagination_item + ' ' + styles.navigation_button} onClick={() => goPrevPage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/*     <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"/>
                    </svg>
                </li>
                {
                    display_pages.map(page => {
                        return (
                            <li key={page} className={getStyles(page)} onClick={() => getPage(page)}>{page}</li>
                        )
                    })
                }
                <li className={styles.pagination_item + ' ' + styles.navigation_button} onClick={() => goNextPage()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/*    <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"/>
                    </svg>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination;