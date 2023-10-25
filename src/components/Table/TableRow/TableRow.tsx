import React from 'react';
import styles from './TableRow.module.css';
import type {TTableRowProps, TRowData} from "../TableProps";
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
                            <td key={rowData[key as keyof TRowData]}>
                            {
                                (key === 'image') ? 
                                <img src={rowData[key as keyof TRowData] as string} alt={'logo'}/> 
                                : 
                                <span className={getStyles(key, rowData[key] as number)}>
                                    {formatNumber(rowData[key] as number)}
                                </span>
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