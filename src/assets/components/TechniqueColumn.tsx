import "./TechniqueColumn.css";
import "./HeaderItem.css";
import { Tooltip } from "antd";

type TechniqueColumnProps = {
  id: string;
  name: string;
  count: number;
};

export const TechniqueColumn = ({ id, name, count }: TechniqueColumnProps) => {
  
  const colors =
    count <= 2
      ? "subtechniques-event yellow"
      : count > 2 && count <= 14
      ? "subtechniques-event orange"
      : count >= 15
      ? "subtechniques-event red"
      : "subtechniques-event";

      const color = '#efdac7';
  return (
      <Tooltip title={
        <div className="tooltip-fs ">
          <div className="subtechniques-id">{id}</div>
          <div className="subtechniques-name">{name}</div>
          <span className={colors}>{count}</span>
        </div>
  } color={color}>
      
      <div className="tecnique-wrapper">
        <div className="subtechniques-list">
          <div className="subtechniques-list-wrapper">
            <div className="subtechniques-list-box">
              <div className="subtechniques-id">{id}</div>
              <div className="subtechniques-name">{name}</div>
              <span className={colors}>{count}</span>
            </div>
          </div>
        </div>
      </div>
      </Tooltip>
    // </Tooltip>
  );
};

export default TechniqueColumn;
