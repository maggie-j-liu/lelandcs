import { ReactNode } from "react";
const DashboardCard = ({ children }: { children: ReactNode }) => {
  return <div className={"bg-gray-800 px-8 py-4 rounded-md"}>{children}</div>;
};
export default DashboardCard;
