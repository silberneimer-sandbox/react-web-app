import React from "react";
import HDCDashboardView from "../templates/HDCDashboardView";
import {TableContentBodyColumn, TableContentBodyData} from "../assets/molecules/HDCTableContentBody";

const RecordColumns: Array<TableContentBodyColumn> = [
    [
        'ID',
        true,
        (data) => data.jobId
    ],
    [
        'Route',
        false,
        (data) => data.routeId
    ],
    [
        'Country',
        false,
        (data) => data.country
    ],
    [
        'GOF',
        false,
        (data) => data.gofVersion
    ],
    [
        'SILS',
        false,
        (data) => data.silsVersion
    ],
    [
        'SILS Output',
        false,
        (data) => data.silsOutput
    ],
    [
        'Status',
        false,
        (data) => data.jobStatus
    ],
    [
        'By User',
        false,
        (data) => data.jobUser
    ],
];

const SampleData = () => {
    return new TableContentBodyData(
        "{UUID}",
        "1304_0601",
        "jp",
        "TBD",
        "00.03.42",
        "MES_0804<SIS>CVR#1 rev24589",
        "TBD",
        "Finished",
        "Succeed",
        "UserA",
        "https://test-hdc.s3.amazonaws.com/20200130171901/spi/2017_0701.zip?AWSAccessKeyId=AKIA45EBCODAK4SNMXPL&Expires=1580372998&Signature=v4z5CRoro0f3hbWVCtFfn7oLQ3w%3D",
        "https://test-hdc.s3.amazonaws.com/20200130171901/spi/2017_0701.zip?AWSAccessKeyId=AKIA45EBCODAK4SNMXPL&Expires=1580372998&Signature=v4z5CRoro0f3hbWVCtFfn7oLQ3w%3D")
};

const ExampleDataSet = () => {
    let sampleA = SampleData();
    sampleA.jobId = "35EC032A-EF5B-4A98-8D05-2DD3CBC491F0";
    sampleA.routeId = "1304_0601";
    sampleA.jobUser = "UserA";
    let sampleB = SampleData();
    sampleB.jobId = "45215CCA-CBCE-45E9-901A-BC0DF204527E";
    sampleB.routeId = "1304_0602";
    sampleB.jobUser = "UserB";
    let sampleC = SampleData();
    sampleC.jobId = "1243C3F8-072C-4E86-B92D-8ED79AF9EF2E";
    sampleC.routeId = "2304_1203";
    sampleC.country = "en";
    sampleC.jobUser = "UserC";
    return [sampleA, sampleB, sampleC]
};

const HDCDashboardViewPage: React.FC = () => {
    let dataSet = ExampleDataSet();
    return (
        <HDCDashboardView title="HDC Dashboard"
                          dataSet={dataSet}
                          columns={RecordColumns} />
    )
};

export default HDCDashboardViewPage;
