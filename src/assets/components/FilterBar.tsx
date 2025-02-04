import React, { createContext, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Select, Space } from "antd";
import "./FilterBar.css";
type FilterBar = {};

export default function FilterBar({
  categoryValues,
  actorMainNames,
  actorOtherNames,
  onCategoryChange,
  onActorMainNameChange,
  onActorOtherNameChange,
}: {
  categoryValues: string[];
  actorMainNames: string[];
  actorOtherNames: string[] /* CHANGE TYPE */;
  onCategoryChange: (string) => void;
  onActorMainNameChange: (string) => void;
  onActorOtherNameChange: (string) => void;
}) {
  // console.log(uniqueOtherCategories);

  const onSearch = (value: string) => {
    // setTaCategoryValue(value);

    console.log("search:", value);
  };

  return (
    <div className="filter-container">
      <div className="dropdown-container">
        <div className="dropdown">
          <Select
            showSearch
            placeholder="Threat Actor Category"
            optionFilterProp="label"
            onChange={onCategoryChange}
            onSearch={onSearch}
            options={categoryValues.sort().map((x) => ({ label: x, value: x }))}
          />
        </div>
        <div className="dropdown">
          <Select
            showSearch
            placeholder="Threat Actor Name"
            optionFilterProp="label"
            onChange={onActorMainNameChange}
            onSearch={onSearch}
            options={actorMainNames.sort().map((x) => ({ label: x, value: x }))}
          />
        </div>
        <div className="dropdown">
          <Select
            showSearch
            placeholder="Threat Actor Other Names"
            optionFilterProp="label"
            onChange={onActorOtherNameChange}
            onSearch={onSearch}
            options={actorOtherNames
              .sort()
              .map((x) => ({ label: x, value: x }))}
          />
        </div>
      </div>
    </div>
  );
}
