import "./HeaderItem.css";

type TechniqueItemProps = {
  id: string;
  name: string;
  count: number;
};

export default function HeaderItem({ id, name, count }: TechniqueItemProps) {
  return (
    <div className="subtechniques-list-wrapper">
      <div className="subtechniques-list-box">
        <div className="subtechniques-id">{id}</div>
        <div className="subtechniques-name">{name}</div>
        <span className="subtechniques-event">{count}</span>
      </div>
    </div>
  );
}
