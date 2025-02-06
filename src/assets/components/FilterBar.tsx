import { Dropdown, Select, Space } from "antd";
import "./FilterBar.css";
import { TrendingTechnique } from "./Data";
import clear from "./images/clear.png";

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
  onCategoryChange: (value: string[]) => void;
  onActorMainNameChange: (string) => void;
  onActorOtherNameChange: (string) => void;
}) {
  // console.log(categoryValues); //['Nation-State (Russia)']

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const taCategoryValues = categoryValues
    .sort()
    .map((x) => {
      console.log(x);
      return ({ label: x, value: x })
    } );
  console.log(taCategoryValues);
  return (
    <div className="filter-container">
      <div className="dropdown-container">
        <div className="dropdown">
          {/* <button onClick={categoryValues}>          <img src={clear} alt="clear" className="clear-icon" />
          </button> */}
          <Select
            mode="tags"
            // showSearch
            allowClear
            tokenSeparators={[","]}
            placeholder="Threat Actor Category"
            // optionFilterProp="label"
            onChange={onCategoryChange}
            onSearch={onSearch}
            options={taCategoryValues}
          />
        </div>
        <div className="dropdown">
          <Select
            mode="tags"
            showSearch
            allowClear
            placeholder="Threat Actor Name"
            optionFilterProp="label"
            onChange={onActorMainNameChange}
            onSearch={onSearch}
            options={actorMainNames.sort().map((x) => ({ label: x, value: x }))}
          />
        </div>
        <div className="dropdown">
          <Select
            mode="tags"
            showSearch
            allowClear
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
