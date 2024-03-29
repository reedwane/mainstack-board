import axios from "axios";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import DashboardGraph from "@/containers/DashboardGraph";
import Link from "next/link";

export const getData = async () => {
  const response = await axios.get("https://fe-task-api.mainstack.io/");
  const data = response.data;
  return data;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["data"], getData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <div className="">
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <h2 className="text-[24px] leading-[32px] font-customBold mb-[10px]">
            Good morning, Blessing ⛅️
          </h2>

          <p className="text-[14px] text-[#31373D]">
            Check out your dashboard summary.
          </p>
        </div>
        <Link href={"#!"} className=" text-[14px] text-[#FF5403]">
          View analytics
        </Link>
      </div>

      {isLoading ? (
        <StyledPlaceholder>Loading...</StyledPlaceholder>
      ) : isError ? (
        <StyledPlaceholder>Unable to fetch data</StyledPlaceholder>
      ) : (
        <DashboardGraph data={data} />
      )}
    </div>
  );
}

const StyledPlaceholder = ({ children }: any) => {
  return (
    <div className="w-full aspect-video flex items-center justify-center font-customMed text-[18px]">
      {children}
    </div>
  );
};
