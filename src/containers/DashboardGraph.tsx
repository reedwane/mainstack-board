import * as React from "react";
import { format } from "date-fns";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

interface IDashboardGraphProps {
  data: any;
}

const DashboardGraph: React.FunctionComponent<IDashboardGraphProps> = ({
  data,
}) => {
  const { graph_data, top_locations, top_sources } = data || {};

  const areaDataMap = new Map(Object.entries(graph_data.views));

  let processedData = Array.from(areaDataMap, ([date, value]) => ({
    date: format(new Date(date), "dd MMM"),
    value,
  }));

  const lineGraphLabels = Object.keys(graph_data.views).map((date: any) =>
    format(new Date(date), "dd MMM")
  );

  const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {payload?.value}
        </text>
      </g>
    );
  };

  const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={-4} textAnchor="end" fill="#666">
          {payload?.value}
        </text>
      </g>
    );
  };

  const CustomYAxisLabel = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
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
    <div className="pt-[32px] pb-[22px] px-6">
      <h3 className="text-[18px] leading-[24px] font-customMed">Page Views</h3>

      <p className="text-[14px]">All time</p>

      <ResponsiveContainer height={324} className="text-[14px] text-[#56616B]">
        <AreaChart
          data={processedData}
          margin={{ top: 30, right: 0, bottom: 0 }}
        >
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
            //   padding={{ top: 30, bottom: 30 }}
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
  );
};

export default DashboardGraph;
