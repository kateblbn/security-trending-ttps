import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Tooltip } from "antd";
import React from "react";
import { MonthRange } from "./MonthRangeSlider";
type SwitchToggleProps = {
    setMonthRange: React.Dispatch<React.SetStateAction<MonthRange | undefined>>; //// !!!!!!!!!!!!!!!!!!!!!
    setIsTrendingView: (value: boolean) => void; /////!!!!!!!!!!!!!!!!
    isTrendingView: boolean;
}

export default function SwitchToggle({setMonthRange, setIsTrendingView, isTrendingView}: SwitchToggleProps) {
  const trendingTooltip = "Based on known events";
  const baselineTooltip =
    "Unique combinations of threat actors and their techniques";
    function onToggleChange(isTrending: boolean) {
        if (!isTrending) setMonthRange(undefined);
        setIsTrendingView(isTrending);
      }
    
  return (
    <div className="switch-group">
      <Tooltip title={baselineTooltip}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </Tooltip>
      <h4>Baseline</h4>
      <Switch onChange={onToggleChange} value={isTrendingView} />
      <h4>Trending</h4>
      <Tooltip title={trendingTooltip}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </Tooltip>
    </div>
  );
}
