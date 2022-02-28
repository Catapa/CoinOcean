import React from 'react'
import styles from './PageContent.module.css'
const PageContent = (props) => {
    return (
        <div className={styles.padding + ' ' + styles.margin}>
            {props.children}
        </div>
    )
}
export default PageContent