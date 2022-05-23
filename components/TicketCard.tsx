import DashboardCard from "./DashboardCard";
import TicketFromUser from "./TicketFromUser";
import firebase from "@/utils/firebase";
import { FiCopy, FiDownloadCloud, FiCheckCircle } from "react-icons/fi";
import useTicketNum from "@/utils/useTicketNum";
import { SITE_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import Link from "next/link";
const TicketCard = ({ user }: { user: firebase.User }) => {
  const { num } = useTicketNum();
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);
  return (
    <DashboardCard title={"Your Ticket"}>
      <div className={"flex justify-center"}>
        <TicketFromUser user={user} bgColor={"bg-gray-800"} link={true} />
      </div>
      <div
        className={
          "mt-4 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 mx-auto w-max"
        }
      >
        <button
          className={`ticket-button ${
            num === null ? "brightness-[60%] cursor-not-allowed" : ""
          }`}
          onClick={() => {
            navigator.clipboard.writeText(`${SITE_URL}/ticket/${num}`);
            setCopied(true);
          }}
          disabled={num === null || copied}
        >
          {copied ? <FiCheckCircle /> : <FiCopy />}
          <span className={"mx-auto"}>{copied ? "Copied!" : "Copy Link"}</span>
        </button>
      </div>
      <Link href="/tickets">
        <a
          className={
            "block w-max mt-4 text-sm sm:text-base group hover:gradient-border border-b-2"
          }
        >
          View other tickets &rarr;
        </a>
      </Link>
    </DashboardCard>
  );
};

export default TicketCard;
