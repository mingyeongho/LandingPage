import { WheelProvider } from "@/src/app";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "대한민국 1등 배달앱, 배달의민족",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <WheelProvider>{children}</WheelProvider>;
};

export default layout;
