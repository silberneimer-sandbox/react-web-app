import React from "react";
import styled from "styled-components";

export class TableContentBodyData {
    constructor(
        public jobId: string,
        public routeId: string,
        public country: string,
        public mapVersion: string,
        public gofVersion: string,
        public silsVersion: string,
        public ivVersion: string,
        public jobStatus: string,
        public jobResult: string,
        public jobUser: string,
        public silsOutput: string,
        public ivOutput: string) {}
}

type DataHandler = (recordData: TableContentBodyData) => string;
export type TableContentBodyColumn = [string, boolean, DataHandler];

interface ContentBodyProps {
    recordDataSet: Array<TableContentBodyData>,
    columns: Array<TableContentBodyColumn>;
}

const WordBreakStyle = styled.div`
    word-break: break-all;
`;
// TODO: あとで使えるようにする予定
// eslint-disable-next-line
const RecordPrimaryItem = WordBreakStyle.withComponent('th')
const RecordItem = WordBreakStyle.withComponent('td')

const HDCTableContentBody: React.FC<ContentBodyProps> = (props: ContentBodyProps) => {
    return (
        <tbody>
        {
            props.recordDataSet.map(data => {
                return (
                    <tr>
                        {
                            props.columns.map(column => {
                                return (

                                    <RecordItem>
                                        { column[2](data) }
                                    </RecordItem>
                                )
                            })
                        }
                    </tr>
                )
            })
        }
        </tbody>
    )
};

export default HDCTableContentBody;
