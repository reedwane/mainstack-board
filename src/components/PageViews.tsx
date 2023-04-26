import * as React from "react";
import { ReactSVG as SVG } from "react-svg";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

interface IPageViewsProps {
  data: any;
}

const PageViews: React.FunctionComponent<IPageViewsProps> = ({ data }) => {
  const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x || 0},${y || 0})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {payload?.value}
        </text>
      </g>
    );
  };

  const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x || 0},${y || 0})`}>
        <text x={0} y={0} dy={-4} textAnchor="end" fill="#666">
          {payload?.value}
        </text>
      </g>
    );
  };

  const CustomYAxisLabel = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x || 0},${y || 0})`}>
        <text
          x={0}
          y={0}
          dy={-16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-90)"
        >
          {payload?.value}
        </text>
      </g>
    );
  };

  const allTimeValue = data.reduce((acc: number, b: any) => acc + b.value, 0);

  const [selectedOption, setSelectedOption] = React.useState(4);
  const options = [
    "1 Day",
    "3 Days",
    "7 Days",
    "30 Days",
    "All Time",
    "Custom Date",
  ];

  return (
    <section className="">
      <div className="flex items-center gap-3 mt-6 flex-wrap">
        {options.map((option: string, idx: number) => (
          <OptionButton
            key={"option-" + idx}
            className="font-customMed text-[14px]"
            selected={selectedOption === idx}
          >
            {option}
          </OptionButton>
        ))}
      </div>

      <div className="border-[#EFF1F6] border-[1px] rounded-[12px] pt-[32px] px-[24px] pb-[22px] mt-6">
        <h3 className="text-[18px] leading-[24px] font-customMed mb-2 flex items-center justify-between">
          Page Views <SVG src={"/icons/info.svg"} className="cursor-pointer" />
        </h3>

        <p className="text-[14px]">All time</p>

        <p className="font-customBold text-[48px] leading-[57.6px] mt-6">
          {allTimeValue}
        </p>

        <ResponsiveContainer
          height={324}
          className="text-[14px] text-[#56616B]"
        >
          <AreaChart data={data} margin={{ top: 30, left: -30, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(255, 84, 3)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(255, 84, 3)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              padding={{ left: 30, right: 30 }}
              tick={<CustomXAxisTick />}
              stroke="none"
            />
            <YAxis
              padding={{ top: 30, bottom: 30 }}
              tick={<CustomYAxisTick />}
              label={<CustomYAxisLabel />}
              stroke="none"
            />

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />

            <Area
              type="linear"
              dataKey="value"
              stroke="#FF5403"
              dot={false}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

const OptionButton = styled.button<any>`
  border-radius: 100px;
  height: 40px;
  min-width: 74px;
  border: 1px solid #eff1f6;
  padding: 12px 16px 12px;
  display: inline-flex;
  align-items: center;
  color: ${(props) => (props.selected ? "#ff5403" : "black")};
  background-color: ${(props) => (props.selected ? "#ffeee5" : "white")};
  border-color: ${(props) => (props.selected ? "#ff5403" : "#eff1f6")};

  &:hover {
    color: #ff5403;
    background-color: #ffeee5;
    border-color: #ff5403;
  }
`;

export default PageViews;
