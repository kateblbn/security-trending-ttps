import { ConfigProvider, Slider } from "antd";
import { useState } from "react";
import "./MonthRangeSlider.css";

export type MonthRange = {
  minDate: Date;
  maxDate: Date;
};

type MonthRangeSliderProps = {
  data: Date[];
  onChange: (newRange: MonthRange) => void;
};

const sliderTheme = {
  components: {
    Slider: {
      // colorPrimary: "#00C8FF",
      // algorithm: true,
      // railBg: "#FFF",
      // railHoverBg: "#FFF",
    },
  },
};

export default function MonthRangeSlider({
  data,
  onChange,
}: MonthRangeSliderProps) {
  const monthDates = Array.from(
    new Set(data.map((date) => `${date.getFullYear()}-${date.getMonth()}`))
  )
    .map((key) => {
      const [year, month] = key.split("-").map(Number);
      return new Date(year, month);
    })
    .sort((a, b) => a.getTime() - b.getTime());

  if (monthDates.length === 0) {
    return <div>No date range available</div>;
  }

  const minIndex = 0;
  const maxIndex = monthDates.length - 1;

  const [currentMinIndex, setCurrentMinIndex] = useState(minIndex);
  const [currentMaxIndex, setCurrentMaxIndex] = useState(maxIndex);

  const currentMinDate = monthDates[currentMinIndex];
  const currentMaxDate = new Date(
    monthDates[currentMaxIndex].getFullYear(),
    monthDates[currentMaxIndex].getMonth() + 1,
    0
  );

  function handleChange([min, max]: number[]) {
    const maxDate = new Date(monthDates[max]);
    maxDate.setMonth(maxDate.getMonth() + 1); // sets to last day of month
    maxDate.setDate(0); // sets to last day of month
    onChange({ minDate: monthDates[min], maxDate: maxDate });
  }

  return (
    <ConfigProvider theme={sliderTheme}>
      <div className="slider-container">
        <div className="subtechniques-name period">Period</div>
        <div className="labels">
          <h6>
            {currentMinDate.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
            })}
          </h6>
          <h6>
            {currentMaxDate.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
            })}
          </h6>
        </div>
        <Slider
          range
          min={minIndex}
          max={maxIndex}
          defaultValue={[currentMinIndex, currentMaxIndex]}
          onChange={([min, max]) => {
            setCurrentMinIndex(min);
            setCurrentMaxIndex(max);
          }}
          onChangeComplete={handleChange}
          tooltip={{ open: false }}
        />
      </div>
    </ConfigProvider>
  );
}
