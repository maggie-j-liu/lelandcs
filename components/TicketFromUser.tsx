import firebase from "@/utils/firebase";
import formatTicketNum from "@/utils/formatTicketNum";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import Link from "next/link";
import useTicketNum from "@/utils/useTicketNum";
const TicketFromUser = ({
  user,
  bgColor,
  link = false,
}: {
  user: firebase.User;
  bgColor: string;
  link: boolean;
}) => {
  const [ticketNumber, setTicketNumber] = useState<null | string>(null);
  const { setNum } = useTicketNum();
  useEffect(() => {
    const getNumber = async () => {
      const { token } = await user.getIdTokenResult();
      const ticketNum = await fetch("/api/ticketNumber", {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
      }).then((res) => res.json());
      setTicketNumber(formatTicketNum(JSON.parse(ticketNum)));
      setNum(JSON.parse(ticketNum));
    };
    getNumber();
  }, [user]);
  if (link && ticketNumber !== null) {
    return (
      <Link href={`/ticket/${+ticketNumber}`}>
        <a>
          <Ticket
            bgColor={bgColor}
            photoURL={user.photoURL as string}
            displayName={user.displayName as string}
            ticketNum={ticketNumber}
          />
        </a>
      </Link>
    );
  }
  return (
    <Ticket
      bgColor={bgColor}
      photoURL={user.photoURL as string}
      displayName={user.displayName as string}
      ticketNum={ticketNumber}
    />
  );
};

export default TicketFromUser;
