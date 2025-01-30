import "./HeaderItem.css";
import { Tooltip } from 'antd';

type TechniqueItemProps = {
  id: string;
  name: string;
  count: number;
};

export default function HeaderItem({ id, name, count }: TechniqueItemProps) {
  return (
    <>  

    <div className="subtechniques-list-wrapper">
      <div className="subtechniques-list-box">
        <div className="subtechniques-id" title="text here">{id}</div>
        <div className="subtechniques-name">{name}</div>
        <span className="subtechniques-event">{count}</span>
      </div>
  </div>
    </>
  );
}
