import React from 'react';
import styles from './TableHeader.module.css';
import type {TableHeaderProps} from "../TableProps";

const TableHeader = ({headers}: TableHeaderProps) => {
    return (
        <thead className={styles.table_header}>
            <tr>
                {headers.map(header =>
                    <th key={header}>{header}</th>
                )}
            </tr>
        </thead>
    )
}
export default TableHeader