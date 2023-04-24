import * as React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

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
  return (
    <section>
      <h3 className="text-[18px] leading-[24px] font-customMed">Page Views</h3>

      <p className="text-[14px]">All time</p>

      <p className="font-customBold text-[48px] leading-[57.6px]">500</p>

      <ResponsiveContainer height={324} className="text-[14px] text-[#56616B]">
        <AreaChart data={data} margin={{ top: 30, left: -30, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(255, 84, 3)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="rgb(255, 84, 3)" stopOpacity={0} />
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
    </section>
  );
};

export default PageViews;
