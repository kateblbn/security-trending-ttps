type MainTableProps = {
  id: string;
  name: string;
  number: number;
};

export default function TechniqueItem({ id, name, number }: MainTableProps) {
  return (
    <div className="subtechniques-list-wrapper">
      <div className="subtechniques-list-box">
        <div className="subtechniques-id">{id}</div>
        <div className="subtechniques-name">{name}</div>
        <span className="subtechniques-event">{number}</span>
      </div>
    </div>
  );
}
