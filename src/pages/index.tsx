import axios from "axios";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import DashboardGraph from "@/containers/DashboardGraph";

export const getData = async () => {
  const response = await axios.get("https://fe-task-api.mainstack.io/");
  const data = response.data;
  return data;
};

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["data"], getData);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  console.log({ data, isLoading, isError });

  return (
    <div className="">
      <h2 className="text-[24px] leading-[32px] font-customBold mb-[10px]">
        Good morning, Blessing ⛅️
      </h2>

      <p className="text-[14px] text-[#31373D]">
        Check out your dashboard summary.
      </p>

      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Unable to fetch data"
      ) : (
        <DashboardGraph data={data} />
      )}
    </div>
  );
}