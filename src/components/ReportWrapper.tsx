import Link from "next/link";
import { ColorBg } from "./CircleColorBg";

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
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[18px] font-customMed text-[#131316]">
          {reportType}
        </h3>
        <Link href={reportUrl} className="text-[14px] text-[#FF5403]">
          View full reports
        </Link>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-1">
        <div className="w-[50%] min-w-[170px] ">
          {data.map((entry: any, idx: number) => (
            <p
              key={`entry-${idx}`}
              className="flex items-center gap-2 my-2.5 leading-[24px] capitalize w-full flex-wrap"
            >
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
