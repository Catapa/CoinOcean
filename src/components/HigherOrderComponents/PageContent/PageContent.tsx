import React, { ReactNode } from 'react';
import styles from './PageContent.module.css';

type TPageContent = {
    children: ReactNode
};

const PageContent = ({children}: TPageContent) => {
    return (
        <div className={`${styles.padding} ${styles.margin}`}>
            {children}
        </div>
    );
};
export default PageContent;