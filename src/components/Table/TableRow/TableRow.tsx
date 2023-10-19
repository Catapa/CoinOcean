import React from 'react';
import styles from './TableRow.module.css';
import type {TTableRowProps} from "../TableProps";
import {formatNumber} from "../../../utils/utils";
const TableRow = ({fieldKeys, rowData, onClick}: TTableRowProps) => {
    const getStyles = (key: string, data: number) => {
        let classes = [];
        if (key.includes('price_change_percentage')) {
            if (typeof(data) === 'number') {
                if (data > 0)
                    classes.push(styles.green);
                if (data < 0)
                    classes.push(styles.red);
            }
        }
        return classes.join(' ');
    }
    return (
        <tr key={rowData.id} className={styles.table_row} onClick={onClick}>
            {
                fieldKeys.map(key =>
                    {
                        return (
                            <td key={rowData[key]}>
                            {
                                (key === 'image') ? <img src={rowData[key]} alt={'logo'}/> : <span className={getStyles(key, rowData[key])}>{formatNumber(rowData[key])}</span>
                            }
                            </td>
                        )
                    }
                )
            }
        </tr>
    );
};
export default TableRow;