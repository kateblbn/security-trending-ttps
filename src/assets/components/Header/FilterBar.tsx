import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Select, Space } from "antd";
import { GroupCategoriesFilter } from "../Data";

export default function FilterBar({
  categoryName,
}: {
  categoryName: GroupCategoriesFilter[];
}) {
  // SORT IT ALL!
  // https://dev.azure.com/GBS-ESA/ESA/_git/da-bu-overview-react-web-resource?path=/src/components/Header.tsx copy ! header.css too
  const taCategory = categoryName.map((e) => e.categoryName);
  const taName = categoryName.map((e) => e.taGroup);
  console.log(taName);
  const taOtherName = categoryName.map((e) => e.otherNames);

  const reducedTaCategory = [...new Set(taCategory)];
  const reducedTaName = [...new Set(taName)];
  const reducedtaOtherName = [...new Set(taOtherName)];
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="filter-container">
      <div className="dropdown">
        <Select
          showSearch
          placeholder="Threat Actor Category"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={reducedTaCategory.map((e) => ({
            value: "",
            label: e,
          }))}
        />
      </div>
      <div className="dropdown">
        <Select
          showSearch
          placeholder="Threat Actor Name"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={reducedTaName.map((e) => ({
            value: "knut" /* useState and search with name or id*/,
            label: e,
          }))}
        />
      </div>
      <div className="dropdown">
        <Select
          showSearch
          placeholder="Threat Actor Other Names"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={reducedtaOtherName.map((e) => ({
            value: "",
            label: e,
          }))}
        />
      </div>
    </div>
  );
}
