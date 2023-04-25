import * as React from "react";
import { format } from "date-fns";
import PageViews from "@/components/PageViews";
import TopLocations from "@/components/TopLocations";
import styled from "styled-components";
import TopSources from "@/components/TopSources";

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

  return (
    <div className="flex flex-col gap-6 pt-[32px] pb-[22px] px-6">
      <PageViews data={processedData} />

      <div className="flex gap-4 flex-wrap">
        <ReportWrapper>
          <TopLocations
            data={top_locations.sort((a: any, b: any) => b?.count - a?.count)}
          />
        </ReportWrapper>

        <ReportWrapper>
          <TopSources
            data={top_sources.sort((a: any, b: any) => b?.count - a?.count)}
          />
        </ReportWrapper>
      </div>
    </div>
  );
};

const ReportWrapper = styled.div`
  width: 49%;
`;

export default DashboardGraph;
