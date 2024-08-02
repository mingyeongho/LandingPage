import { Metadata } from "next";
import { Baemin } from "@/src/_pages";

export const metadata: Metadata = {
  title: "대한민국 1등 배달앱, 배달의민족",
};

const page = () => {
  return <Baemin />;
};

export default page;
