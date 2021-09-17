import { SITE_URL } from "@/utils/constants";
import DashboardCard from "./DashboardCard";
import Link from "next/link";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import useUser from "@/utils/useUser";
import { useEffect, useState } from "react";
import firebase from "@/utils/firebase";

const TodoCard = ({ user }: { user: firebase.User }) => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const getStatus = async () => {
      const { token } = await user.getIdTokenResult();
      const status = await fetch("/api/formSubmissionStatus", {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
      }).then((res) => res.json());
      setSubmitted(status);
      setLoadingStatus(false);
    };
    getStatus();
  }, [user]);
  return (
    <DashboardCard title={"Next Steps"}>
      <ol className={"list-decimal list-inside xs:text-lg"}>
        <li className={"line-through text-gray-300"}>
          <span className={"mr-3 xs:mr-4 md:mr-6"}>
            Visit our website at{" "}
            <Link href="/">
              <a className={"text-blue-200 hover:text-blue-300"}>{SITE_URL}</a>
            </Link>{" "}
            and sign up.
          </span>
          <FiCheckCircle className={"inline xs:h-6 xs:w-6 text-green-200"} />
        </li>
        {!loadingStatus && (
          <li className={submitted ? "line-through text-gray-300" : ""}>
            <span className={"mr-3 xs:mr-4 sm:mr-6"}>
              Fill out{" "}
              <a
                href="https://forms.gle/vdmPEA6fdxqQ7mmR7"
                className={"text-blue-200 hover:text-blue-300"}
              >
                this google form
              </a>{" "}
              to sign up for the club.
            </span>
            {submitted ? (
              <FiCheckCircle
                className={"inline xs:h-6 xs:w-6 text-green-200"}
              />
            ) : (
              <FiXCircle className={"inline xs:h-6 xs:w-6 text-red-200"} />
            )}
          </li>
        )}
      </ol>
    </DashboardCard>
  );
};

export default TodoCard;
