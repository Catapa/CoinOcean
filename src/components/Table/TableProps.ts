import { Key, MouseEventHandler } from "react";

type headersType = string[];
type tableFieldsType = Object;
type tableDataType = Object;
type TRowData = {
    id: Key | null | undefined,
};

export type TTableProps =  {
    fields: tableFieldsType,
    data: tableDataType,
    onPageSelect: Function
};

export interface TableHeaderProps {
    headers: headersType,
};

export type TTableRowProps = {
    fieldKeys: any[],
    rowData: TRowData,
    onClick: MouseEventHandler<HTMLTableRowElement>
};