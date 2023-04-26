import Link from "next/link";
import { ColorBg } from "./CircleColorBg";
import SourceIcon from "./SourceIcon";

export const ReportWrapper = ({
  children,
  reportType,
  reportUrl,
  targetLabel,
  data,
}: any) => {
  const COLORS = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];

  return (
    <div className={`w-full p-6`}>
      <div className="w-full flex justify-between items-center mb-[24px] md:mb-[42px]">
        <h3 className="text-[18px] font-customMed text-[#131316]">
          {reportType}
        </h3>
        <Link href={reportUrl} className="text-[14px] text-[#FF5403]">
          View full reports
        </Link>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-1">
        <div className="sm:w-[50%] min-w-[170px] ">
          {data.map((entry: any, idx: number) => (
            <p
              key={`entry-${idx}`}
              className="flex items-center gap-2 my-2.5 leading-[24px] capitalize w-full flex-wrap"
            >
              <SourceIcon label={entry?.[targetLabel]?.toLowerCase()} />
              {entry?.[targetLabel]}{" "}
              <span className="font-customMed">{entry?.percent}%</span>{" "}
              <ColorBg colorBg={COLORS[idx]} />
            </p>
          ))}
        </div>

        {children}
      </div>
    </div>
  );
};
