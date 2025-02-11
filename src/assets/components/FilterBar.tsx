import { Button, Form, Select, } from "antd";
import "./FilterBar.css";

type FilterBarProps = {
  categoryValues: string[];
  actorNames: ActorNames[];
  onCategoryChange: (value: string[]) => void;
  onActorMainNameChange: (string) => void;
  setButton: (string) => void;
};

export type ActorNames = {
  mainName: string;
  otherNames: string;
};

export default function FilterBar({
  categoryValues,
  actorNames,
  onCategoryChange,
  onActorMainNameChange,
  setButton,
}: FilterBarProps) {
  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const taCategoryValues = categoryValues.sort().map((x) => {
    // console.log(x);
    return { label: x, value: x };
  });

  console.log(actorNames)

  const taActorAndOtherNames: ActorNames[] = actorNames.sort().map((x) => {
    const otherNames = x.otherNames?.replace(/\s?\(.*?\)/g, " ") ?? ""
    return { mainName: x.mainName, otherNames: otherNames };
  });

  const actorOptions = taActorAndOtherNames.map((actor) => {
    return {
      label: (
        <>
          <div className="main-name">{actor.mainName}</div>
          <div className="other-name">{actor.otherNames}</div>
        </>
      ),
      value: actor.mainName,
    };
  });

  const [form] = Form.useForm();

  const clearForm = () => {
    form.resetFields();
    onCategoryChange([]);
    onActorMainNameChange([]);
  };
  return (
    <div className="filter-container">
      <Form form={form} layout="horizontal">
        <Form.Item label="" name="">
          <div className="dropdown-container">
            <div className="dropdown">
              <Select
                mode="tags"
                virtual={false}
                allowClear
                placeholder="Threat Actor Category"
                onChange={onCategoryChange}
                onSearch={onSearch}
                options={taCategoryValues}
              />
            </div>
            <div className="dropdown">
              <Select
                mode="tags"
                allowClear
                virtual={false}
                placeholder="Threat Actor Name"
                onChange={onActorMainNameChange}
                onSearch={onSearch}
                options={actorOptions}
                filterOption={(input, option) => {
                  const mainName = option.value;
                  const otherNames = taActorAndOtherNames.find(
                    (x) => x.mainName == mainName
                  ).otherNames;
                  if (otherNames.toLowerCase().includes(input.toLowerCase()))
                    return true;
                  if (mainName.toLowerCase().includes(input.toLowerCase()))
                    return true;
                  return false;
                }}
              />
            </div>
            <Button onClick={clearForm} style={{ marginLeft: "10px" }}>
              Clear Filters
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
