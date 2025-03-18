import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { TrendingTechnique } from "../Data";
type ModalEventComponentProps = {
  occurences: TrendingTechnique[];
  expandedSummaryId: number;
  toggleSummaryExpand: (id: any) => void;
};
export default function ModalEventComponent({
  occurences,
  expandedSummaryId,
  toggleSummaryExpand,
}: ModalEventComponentProps) {
  console.log(occurences);

  return (
    <>
      <table className="events">
        <thead>
          <tr>
            <th>Actor</th>
            <th>Summary</th>
            <th>Event Date</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {occurences.map((x, index) => (
            <tr key={index}>
              <td>{x.taGroup.esa_name}</td>
              <td
                data-id={index}
                className={`collapsibleCell ${
                  expandedSummaryId === index ? "expandedCell" : ""
                }`}
              >
                <div className={"collapsibleCellContent"}>
                  <Markdown>{x.esa_articlesummary}</Markdown>
                </div>
                <button
                  className="toggle"
                  onClick={() => toggleSummaryExpand(index)}
                >
                  <FontAwesomeIcon
                    icon={
                      expandedSummaryId === index ? faChevronUp : faChevronDown
                    }
                  />
                </button>
              </td>
              <td className="date">
                {x.esa_eventdate.toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                })}
              </td>
              <td>
                <a href={x.esa_articlelink} target="_blank">
                  {x.esa_articletitle}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
