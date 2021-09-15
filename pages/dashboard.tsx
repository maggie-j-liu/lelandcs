import DashboardCard from "@/components/DashboardCard";
import Ticket from "@/components/Ticket";
import useUser from "@/utils/useUser";
import Link from "next/link";

const Dashboard = () => {
  const { user } = useUser();
  if (!user) {
    return <div>Sign in to access your dashboard!</div>;
  }
  return (
    <main className={"w-full mx-auto max-w-5xl my-24"}>
      <Link href={"/"}>
        <a className={"text-gray-300 hover:text-fuchsia-200"}>&larr; Home</a>
      </Link>
      <h1 className={"text-4xl font-bold mt-2"}>Dashboard</h1>
      <h2 className={"text-lg"}>👋 Hi, {user.displayName}!</h2>
      <div className={"space-y-4 mt-4"}>
        <DashboardCard>
          <h2 className={"text-3xl font-medium"}>Your Ticket</h2>
          <Ticket user={user} />
        </DashboardCard>
      </div>
    </main>
  );
};

export default Dashboard;
