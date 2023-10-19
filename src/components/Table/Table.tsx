import React from 'react';
import styles from './Table.module.css';
import {TTableProps} from './TableProps';
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {useNavigate} from "react-router";
import Pagination from "../Pagination/Pagination";

const Table = ({fields, data, onPageSelect}: TTableProps) => {
    const navigate = useNavigate();
    let headers: string[] = [];
    let fieldKeys: string[] = [];
    for(const [dataObjectKey, header] of Object.entries(fields)) {
        fieldKeys.push(dataObjectKey);
        headers.push(header);
    }
    const handleRowClick = (itemID: string) => {
        navigate(`/${itemID}`);
    }
    const changePage = (callBackResult: string) => {
        const toPage = callBackResult;
        return onPageSelect(toPage);
    }
    return (
        <React.Fragment>
            <table className={styles.table}>
                <colgroup>
                    {headers.map(header => <col key={header}/>)}
                </colgroup>
                <TableHeader headers={headers}/>
                <tbody>
                {
                    Object.values(data).map(item =>
                        <TableRow key={item.id} fieldKeys={fieldKeys} rowData={item} onClick={() => handleRowClick(item.id)}/>
                    )
                }
                </tbody>
            </table>
            <Pagination onPageSelect={changePage}/>
        </React.Fragment>

    );
};
export default Table;