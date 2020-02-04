import React from "react";
import HDCNaviHeader from "../assets/atoms/HDCNaviHeader";
import HDCTable from "../assets/organisms/HDCTable";
import {TableContentBodyColumn, TableContentBodyData} from "../assets/molecules/HDCTableContentBody";

interface HDCDashboardViewProps {
    title: string,
    dataSet: Array<TableContentBodyData>,
    columns: Array<TableContentBodyColumn>
}

const HDCDashboardView: React.FC<HDCDashboardViewProps> = (props: HDCDashboardViewProps) => {
    return (
        <div>
            <HDCNaviHeader title={props.title} />
            <HDCTable columns={props.columns}
                      contentDataSet={props.dataSet}/>
        </div>
    )
};

export default HDCDashboardView;
