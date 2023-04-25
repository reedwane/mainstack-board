import { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ReportWrapper } from "./ReportWrapper";

interface ITopLocationsProps {
  data?: any;
}

const TopLocations: React.FunctionComponent<ITopLocationsProps> = ({
  data,
}) => {
  const COLORS = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <ReportWrapper
        reportType="Top Referral source"
        reportUrl="#!"
        targetLabel="country"
        data={data}
      >
        <ResponsiveContainer minWidth={160} minHeight={160}>
          <PieChart width={160} height={160}>
            <Tooltip
              formatter={(value, name, props) => {
                return [props.payload.country, value];
              }}
              label={() => {
                if (activeIndex !== null) {
                  return data[activeIndex].country;
                }
                return null;
              }}
            />
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              fill="#FF5403"
              stroke="none"
              dataKey="count"
              activeIndex={activeIndex!}
              onMouseEnter={(data, index) => setActiveIndex(index)}
            >
              {data.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ReportWrapper>
    </>
  );
};

export default TopLocations;
