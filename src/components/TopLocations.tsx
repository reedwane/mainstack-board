import Link from "next/link";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";

interface ITopLocationsProps {
  data?: any;
}

const TopLocations: React.FunctionComponent<ITopLocationsProps> = ({
  data,
}) => {
  const COLORS = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];

  return (
    <div className={`w-full p-6`}>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[18px] font-customMed text-[#131316]">
          Top Locations
        </h3>
        <Link href={"#!"} className="text-[14px] text-[#FF5403]">
          View full reports
        </Link>
      </div>

      <div className="">
        <div className="">
          {data.map((entry: any, idx: number) => (
            <p key={`entry-${idx}`}>
              {entry?.country} <span>{entry?.percent}</span>{" "}
              <ColorBg colorBg={COLORS[idx]} />
            </p>
          ))}
        </div>

        <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={50}
            outerRadius={80}
            fill="#FF5403"
            stroke="none"
            dataKey="count"
          >
            {data.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

interface ColorBgProps {
  colorBg: string;
}

const ColorBg = styled.span<ColorBgProps>`
  background-color: ${(props) => props.colorBg};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
`;

export default TopLocations;
