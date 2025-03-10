import "./TechniqueItem.css";
import { Tooltip } from "antd";

type TechniqueItemProps = {
  id: string;
  name: string;
  count: number;
  onClick: (mitreId: string) => void
};

export const TechniqueItem = ({ id, name, count, onClick }: TechniqueItemProps) => {

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
        <div className="subtechniques-name">{name}</div>
      </div>
    } mouseEnterDelay={0.5} > 

      <div className="tecnique-wrapper" onClick={e => onClick(id)}>
        <div className="subtechniques-id">{id}</div>
        <div className="subtechniques-name">{name}</div>
        <span className={colors}>{count}</span>
      </div>
    </Tooltip>
    // </Tooltip>
  );
};

export default TechniqueItem;
