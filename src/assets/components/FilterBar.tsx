import { Dropdown, Select, Space } from "antd";
import "./FilterBar.css";
import { TrendingTechnique } from "./Data";
import clear from "./images/clear.png";

type FilterBarProps = {
  categoryValues: string[];
  actorNames: ActorNames[];
  onCategoryChange: (value: string[]) => void;
  onActorMainNameChange: (string) => void;
};
export type ActorNames = {
  mainName: string;
  otherNames: string[];
};
export default function FilterBar({
  categoryValues,
  actorNames,
  onCategoryChange,
  onActorMainNameChange,
}: FilterBarProps) {
  // console.log(categoryValues); //['Nation-State (Russia)']
  // based  categoryValues, actorMainNames, actorOtherNames check if something choosed = actor Category is DISABLED!

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const taCategoryValues = categoryValues.sort().map((x) => {
    // console.log(x);
    return { label: x, value: x };
  });

  const taActorAndOtherNames = actorNames.sort().map((x) => ({
    label: (
      <>
        <div>{x.mainName}</div>
        <div>{x.otherNames} </div>
      </>
    ),
    value: x,
  }));
  console.log(taActorAndOtherNames);
  return (
    <div className="filter-container">
      <div className="dropdown-container">
        <div className="dropdown">
          <Select
            mode="tags"
            virtual={false}
            // disabled
            // showSearch
            allowClear
            tokenSeparators={[", "]}
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
            virtual={false}
            placeholder="Threat Actor Name"
            optionFilterProp="label"
            onChange={onActorMainNameChange}
            onSearch={onSearch}
            options={taActorAndOtherNames}
          />
          
        </div>
      </div>
    </div>
  );
}
