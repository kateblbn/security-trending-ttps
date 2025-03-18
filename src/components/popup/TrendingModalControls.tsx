import { Table } from "antd";
import React from "react";
import { IsoControl, MaturityModelControl, NistControl } from "../Data";

type TrendingModalControls = {
  nist: NistControl[];
  uniqueIsoControls: IsoControl[];
  uniqueMmControls: MaturityModelControl[];
};

export default function TrendingModalControls({
  nist,
  uniqueIsoControls,
  uniqueMmControls,
}) {
  return (
    <div className="controls">
      <Table
        title={() => <h3>NIST 800-53</h3>}
        columns={[
          {
            title: "Control ID",
            key: "controlId",
            dataIndex: "esa_controlid",
          },
          {
            title: "Control name",
            key: "controlName",
            dataIndex: "esa_controlname",
          },
        ]}
        dataSource={nist?.map((x) => ({
          ...x,
          key: x.esa_controlid,
        }))}
      />
      <Table
        title={() => <h3>ISO 27001:2022</h3>}
        columns={[
          {
            title: "Control ID",
            key: "controlId",
            dataIndex: "esa_controlid",
          },
          {
            title: "Control name",
            key: "controlName",
            dataIndex: "esa_controlname",
          },
        ]}
        dataSource={uniqueIsoControls?.map((x) => ({
          ...x,
          key: x.esa_controlid,
        }))}
      />
      <Table
        title={() => <h3>Telenor Maturity Model</h3>}
        columns={[
          {
            title: "Control ID",
            key: "controlId",
            dataIndex: "esa_controlid",
          },
          {
            title: "Control name",
            key: "controlName",
            dataIndex: "esa_controlname",
          },
        ]}
        dataSource={uniqueMmControls?.map((x) => ({
          ...x,
          key: x.esa_controlid,
        }))}
      />
    </div>
  );
}
