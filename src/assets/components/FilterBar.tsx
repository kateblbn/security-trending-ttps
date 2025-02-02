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
  // https://dev.azure.com/GBS-ESA/ESA/_git/da-bu-overview-react-web-resource?path=/src/components/Header.tsx copy ! header.css too
  const taCategory = categoryName.map((e) => e.categoryName);
  const taName = categoryName.map((e) => e.taGroup);
  const taOtherName = categoryName.map((e) => e.otherNames);

  taName.sort();
  taCategory.sort();
  taOtherName.sort();

  const reducedTaCategory = [...new Set(taCategory)];
  const reducedTaName = [...new Set(taName)];
  const reducedtaOtherName = [...new Set(taOtherName)];
  console.log(categoryName.map((e) => e.categoryName));

  const resultActorName = categoryName
    .map((e) => ({
      value: e.techniqueTactic,
      label: e.categoryName,
    }))
    .sort();

  // const reducedActorName = arrayActorName.reduce( (acc, {value, label}) => {
  //   if (!acc[value]) {
  //     acc[value] = new Set()
  //   }
  //   acc[value].add(label)
  //   return acc
  // })
  // console.log(reducedActorName);

  //  const resActorName = resultActorName.filter((item, i) => {
  //   return resultActorName.indexOf(item) == i
  // })

  // const groupedByCategory = categoryName.reduce(
  //   (acc, { techniqueTactic, categoryName }) => {
  //     if (!acc[categoryName]) {
  //       acc[categoryName] = new Set(); // Use a Set to ensure uniqueness of techniqueTactic values
  //     }
  //     acc[categoryName].add(techniqueTactic); // Add techniqueTactic to the Set
  //     return acc;
  //   },
  //   {}
  // );

  // // Step 2: Convert the grouped data to an array of objects in the desired format
  // const resultActorName = Object.keys(groupedByCategory).map((category) => {
  //   return {
  //     label: category,
  //     value: Array.from(groupedByCategory[category]), // Convert Set to array
  //   };
  // });

  // console.log(resultActorName);

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
          // options={reducedTaCategory.map((e) => ({
          //   value: e,
          //   label: e,
          // }))}
          options={resultActorName}
        />
      </div>
      <div className="dropdown">
        <Select
          showSearch
          placeholder="Threat Actor Name"
          optionFilterProp="label"
          onChange={onChangeName}
          onSearch={onSearch}
          options={reducedTaName.map((e) => ({
            value: e /* useState and search with name or id*/,
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
          options={reducedtaOtherName.map((e) => ({
            value: e,
            label: e,
          }))}
        />
      </div>
      </div>
    </div>
  );
}
