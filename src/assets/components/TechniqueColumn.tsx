import "./TechniqueColumn.css";
import "./HeaderItem.css";

type TechniqueColumnProps = {
  id: string;
  name: string;
};

export const TechniqueColumn = ({ id, name }: TechniqueColumnProps) => {
  return (
    <div className="tecnique-wrapper">
      <div className="subtechniques-list">
        <div className="subtechniques-list-wrapper">
          <div className="subtechniques-list-box">
            <div className="subtechniques-id">{id}</div>
            <div className="subtechniques-name">{name}</div>
            <span className="subtechniques-event">{}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniqueColumn;
