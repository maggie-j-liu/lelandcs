import DashboardCard from "@/components/DashboardCard";
import TicketFromUser from "@/components/TicketFromUser";
import useUser from "@/utils/useUser";
import Link from "next/link";

const Dashboard = () => {
  const { user, loading, logout } = useUser();
  if (loading) return null;
  if (!user) {
    return <div>Sign in to access your dashboard!</div>;
  }
  return (
    <main className={"px-6 xs:px-10 lg:px-12 xl:px-24 my-24"}>
      <div className={"w-full mx-auto max-w-5xl"}>
        <Link href={"/"}>
          <a className={"text-gray-300 hover:text-blue-200"}>&larr; Home</a>
        </Link>
        <h1 className={"text-4xl font-bold mt-2"}>Dashboard</h1>
        <h2 className={"text-lg"}>👋 Hi, {user.displayName}!</h2>
        <button onClick={() => logout()}>Sign Out</button>
        <div className={"space-y-4 mt-4"}>
          <DashboardCard>
            <h2 className={"text-3xl font-medium mb-4"}>Your Ticket</h2>
            <TicketFromUser user={user} bgColor={"bg-gray-800"} link={true} />
          </DashboardCard>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
