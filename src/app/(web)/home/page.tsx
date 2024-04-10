import { Suspense } from "react";
import Loading from "../loading";
import { wait } from "@/data/lib/wait";


import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home | WeSync',
};

const HomePage = async () => {
  await wait(1000);
  return (
    <Suspense fallback={<Loading />}>
      HOMEE
    </Suspense>
  );
};

export default HomePage;
