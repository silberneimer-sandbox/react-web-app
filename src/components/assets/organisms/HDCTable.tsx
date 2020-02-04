import React from "react";
import HDCTableContentBody, {TableContentBodyColumn, TableContentBodyData} from "../molecules/HDCTableContentBody";
import {Table} from "reactstrap";
import HDCTableHead from "../atoms/HDCTableHead";
import {TableProps} from "reactstrap/lib/Table";

interface HDCTableProps extends TableProps {
    contentDataSet: Array<TableContentBodyData>,
    columns: Array<TableContentBodyColumn>
}
const HDCTable: React.FC<HDCTableProps> = (props: HDCTableProps) => {
    return (
        <Table>
            <HDCTableHead headers={ props.columns.map((column) => column[0]) } />
            <HDCTableContentBody recordDataSet={props.contentDataSet} columns={props.columns} />
        </Table>
    );
};

export default HDCTable;
