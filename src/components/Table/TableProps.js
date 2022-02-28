type headersType = string[]
type tableFieldsType = Object
type tableDataType = Object
type rowDataType = Object

export interface TableProps {
    fields: tableFieldsType,
    data: tableDataType,
    onPageSelect: EventHandlerNonNull
}

export interface TableHeaderProps {
    headers: headersType,
}

export interface TableRowProps {
    fieldKeys: any[],
    rowData: rowDataType
}