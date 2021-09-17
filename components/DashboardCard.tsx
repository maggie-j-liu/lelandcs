import { ReactNode } from "react";
const DashboardCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div
      className={
        "bg-gray-800 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 rounded-md"
      }
    >
      <h2
        className={
          "text-3xl font-semibold mb-6 xs:mb-8 sm:mb-10 gradient-border border-b-2 w-max"
        }
      >
        {title}
      </h2>
      {children}
    </div>
  );
};
export default DashboardCard;
