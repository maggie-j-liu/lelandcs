import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import TicketCard from "@/components/TicketCard";
import TodoCard from "@/components/TodoCard";
import useUser from "@/utils/useUser";
import Link from "next/link";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user, loading, logout } = useUser();
  const router = useRouter();
  if (loading) return null;
  if (!user) {
    return <div>Sign in to access your dashboard!</div>;
  }
  return (
    <>
      <SEO
        title="Your Leland CS Club Dashboard"
        description="View your ticket and next steps here."
        url="/dashboard"
      />
      <Navbar />
      <main className={"px-6 xs:px-10 lg:px-12 xl:px-24 mt-20 mb-24"}>
        <div className={"w-full mx-auto max-w-5xl"}>
          <Link href={"/"}>
            <a className={"text-gray-300 hover:text-blue-200"}>&larr; Home</a>
          </Link>
          <div className={"flex justify-between items-center mt-4"}>
            <h1 className={"text-2xl xs:text-4xl font-bold mt-2"}>Dashboard</h1>
            <button
              onClick={() => {
                logout();
                router.push("/");
              }}
              className={
                "text-sm xs:text-base bg-gray-700 hover:bg-gray-600 px-2 xs:px-4 py-1.5 rounded-md"
              }
            >
              Sign Out
            </button>
          </div>
          <h2 className={"xs:text-lg mt-2"}>
            👋 Hi, {user.displayName}! Welcome to{" "}
            <span className={"font-mono light-gradient"}>
              Leland Computer Science Club
            </span>
            ! Make sure to sign up by filling out{" "}
            <a
              className={
                "border-b-2 hover:gradient-border border-blue-300 text-blue-200"
              }
              href={"https://forms.gle/vdmPEA6fdxqQ7mmR7"}
            >
              this form
            </a>{" "}
            and joining our{" "}
            <a
              className={
                "border-b-2 hover:gradient-border border-blue-300 text-blue-200"
              }
              href="https://discord.gg/bVxW6B9yDt"
            >
              Discord server
            </a>
            !
          </h2>
          <div className={"space-y-6 mt-8"}>
            <TicketCard user={user} />
            <TodoCard user={user} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
