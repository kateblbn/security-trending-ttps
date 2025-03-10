import './KillChainHeaderItem.css'

type killChainHeaderItemProps = {
    number: number
    tactic: string
    id: string
}

export function KillChainHeaderItem ({number, tactic, id}: killChainHeaderItemProps) {
    return (
    <div className="all-techniques-list">
    <div className="mapping-list">
      <div className="table-number-wrapper">
        <div className="table-number">{number}</div>
      </div>
      <div className="table-tactic-wrapper">
        <div className="table-name">{tactic}</div>
      </div>
      <div className="table-id-wrapper">
        <div className="table-id">{id}</div>
      </div>
    </div>
  </div>

)}