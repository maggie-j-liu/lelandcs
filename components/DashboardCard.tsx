import { ReactNode } from "react";
const DashboardCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={
        "bg-gray-800 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 rounded-md"
      }
    >
      {children}
    </div>
  );
};
export default DashboardCard;
