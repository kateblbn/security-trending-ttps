import React, { createContext, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Select, Space } from "antd";
import { GroupCategoriesFilter } from "./Data";
import "./FilterBar.css";
type FilterBar = {};

export default function FilterBar({
  categoryName,
  setTaCategoryValue,
  setTaNameValue,
  setTaOtherName,
}: {
  categoryName: GroupCategoriesFilter[];
  setTaCategoryValue: any;
  setTaNameValue: any;
  setTaOtherName: any /* CHANGE TYPE */;
}) {
  const taCategory = categoryName.map((e) => e.categoryName);
  const taName = categoryName.map((e) => e.taGroup);
  const taOtherName = categoryName.map((e) => e.otherNames);
  // console.log(taOtherName);

  taName.sort();
  taCategory.sort();
  taOtherName.sort();

  const uniqueCategories = taCategory.reduce((acc: string[], current) => {
    if (!acc.includes(current)) acc.push(current);
    return acc;
  }, []);
  const uniqueActorCategories = taName.reduce((acc: string[], current) => {
    if (!acc.includes(current)) acc.push(current);
    return acc;
  }, []);
  const uniqueOtherCategories = taOtherName.reduce((acc: string[], current) => {
    if (!acc.includes(current)) acc.push(current);
    return acc;
  }, []);
  // console.log(uniqueOtherCategories);

  const onChangeActor = (value: string) => {
    setTaCategoryValue(value);
    console.log(`selected ${value}`);
  };
  const onChangeName = (value: string) => {
    setTaNameValue(value);
    console.log(`selected ${value}`);
  };
  const onChangeOtherName = (value: string) => {
    setTaOtherName(value);
    console.log(`selected ${value}`);
  };

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
            onChange={onChangeActor}
            onSearch={onSearch}
            options={uniqueCategories.map((x) => ({ label: x, value: x }))}
          />
        </div>
        <div className="dropdown">
          <Select
            showSearch
            placeholder="Threat Actor Name"
            optionFilterProp="label"
            onChange={onChangeName}
            onSearch={onSearch}
            options={uniqueActorCategories.map((e) => ({
              value: e,
              label: e,
            }))}
          />
        </div>
        <div className="dropdown">
          <Select
            showSearch
            placeholder="Threat Actor Other Names"
            optionFilterProp="label"
            onChange={onChangeOtherName}
            onSearch={onSearch}
            options={uniqueOtherCategories.map((e) => ({
              value: e,
              label: e,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
