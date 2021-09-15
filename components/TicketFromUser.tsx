import firebase from "@/utils/firebase";
import formatTicketNum from "@/utils/formatTicketNum";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
const TicketFromUser = ({
  user,
  bgColor,
}: {
  user: firebase.User;
  bgColor: string;
}) => {
  const [ticketNumber, setTicketNumber] = useState<null | string>(null);
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
    };
    getNumber();
  }, [user]);
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
