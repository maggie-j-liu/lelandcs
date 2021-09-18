import { SITE_URL } from "@/utils/constants";
import DashboardCard from "./DashboardCard";
import Link from "next/link";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import useUser from "@/utils/useUser";
import { useEffect, useState } from "react";
import firebase from "@/utils/firebase";
import { useRouter } from "next/router";

const TodoCard = ({ user }: { user: firebase.User }) => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState("");
  const [loadingId, setLoadingId] = useState(true);
  const [inServer, setInServer] = useState(false);
  const [loadingServerStatus, setLoadingServerStatus] = useState(true);
  const router = useRouter();
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
      const currentUID = (
        await fetch("/api/getDiscordUserId", {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
        }).then((res) => res.json())
      ).id;
      console.log(currentUID);

      if (currentUID) {
        setUserId(currentUID);
      }
      setLoadingId(false);
      const isInServer = await fetch("/api/userInServer", {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
      }).then((res) => res.json());
      setInServer(isInServer);
      setLoadingServerStatus(false);
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
        <li className={submitted ? "line-through text-gray-300" : ""}>
          <span className={"mr-3 xs:mr-4 sm:mr-6"}>
            Fill out{" "}
            <a
              href="https://forms.gle/vdmPEA6fdxqQ7mmR7"
              className={"text-blue-200 hover:text-blue-300"}
            >
              this google form
            </a>{" "}
            to sign up for the club. Use this email ({user.email}) when filling
            out the form.
          </span>
          {!loadingStatus &&
            (submitted ? (
              <FiCheckCircle
                className={"inline xs:h-6 xs:w-6 text-green-200"}
              />
            ) : (
              <FiXCircle className={"inline xs:h-6 xs:w-6 text-red-200"} />
            ))}
        </li>
        <li className={inServer ? "line-through text-gray-300" : ""}>
          <span className={"mr-3 xs:mr-4 sm:mr-6"}>
            Join our{" "}
            <a
              href="https://discord.gg/AFumZR2E"
              className={"text-blue-200 hover:text-blue-300"}
            >
              discord server
            </a>
            !
          </span>
          {!loadingServerStatus &&
            (inServer ? (
              <FiCheckCircle
                className={"inline xs:h-6 xs:w-6 text-green-200"}
              />
            ) : (
              <FiXCircle className={"inline xs:h-6 xs:w-6 text-red-200"} />
            ))}
        </li>
        <label className={"mt-4 block"}>
          <p className={"text-base"}>
            Your discord user ID (use the{" "}
            <span className={"font-mono text-fuchsia bg-gray-700 px-2 rounded"}>
              %id
            </span>{" "}
            command in our server to find this)
          </p>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className={
              "px-2 h-10 text-base mt-2 font-mono bg-gray-900 border-fuchsia border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:ring focus:outline-none"
            }
          />
          <button
            className={
              "ml-4 px-4 py-0.5 rounded-md bg-gray-600 hover:bg-gray-500"
            }
            onClick={async () => {
              const { token } = await user.getIdTokenResult();
              await fetch("/api/setDiscordUserId", {
                method: "POST",
                body: JSON.stringify({
                  idToken: token,
                  discordID: userId,
                }),
              });
              router.reload();
            }}
          >
            Save
          </button>
        </label>
      </ol>
    </DashboardCard>
  );
};

export default TodoCard;
