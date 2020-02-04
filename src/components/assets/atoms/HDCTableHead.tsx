import React from "react";


interface TableHeadProps {
    headers: Array<string>;
}

const HDCTableHead: React.FC<TableHeadProps> = (props: TableHeadProps) => {
    return (
        <thead>
            <tr>
                {
                    props.headers.map(head => {
                        return <th>{head}</th>
                    })
                }
            </tr>
        </thead>
    )
};

export default HDCTableHead;
