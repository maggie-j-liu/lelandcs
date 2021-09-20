import { GetStaticProps } from "next";
import { db } from "@/utils/admin";
import Ticket from "@/components/Ticket";
import formatTicketNum from "@/utils/formatTicketNum";
import Marquee from "react-fast-marquee";
import GlowTitle from "@/components/GlowTitle";
import { SITE_URL } from "@/utils/constants";
import Link from "next/link";

interface Ticket {
  name: string;
  number: number;
  photo: string;
}
const Tickets = ({ tickets }: { tickets: Ticket[] }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center w-full overflow-hidden h-screen"
      }
    >
      <div className={"px-12 mb-8"}>
        <GlowTitle
          as="h1"
          className="mx-auto font-mono text-2xl sm:text-4xl text-center font-semibold"
        >
          Join Leland Computer Science Club!
        </GlowTitle>
      </div>
      <Marquee speed={120} gradient={false} className={"overflow-hidden"}>
        {tickets.map((ticket) => (
          <div key={ticket.number} className={"py-4 px-8 sm:px-16"}>
            <div className="ticket-xxs xs:ticket-xs sm:ticket-sm md:ticket-md lg:ticket-lg hover:scale-105 hover:duration-200 duration-500">
              <Link href={`/ticket/${ticket.number}`}>
                <a>
                  <Ticket
                    photoURL={ticket.photo}
                    displayName={ticket.name}
                    ticketNum={formatTicketNum(ticket.number)}
                  />
                </a>
              </Link>{" "}
            </div>
          </div>
        ))}
      </Marquee>
      <h2
        className={
          "px-12 mt-8 text-lg text-center text-gray-400 font-medium font-mono"
        }
      >
        Get your ticket at{" "}
        <Link href={"/"}>
          <a>{SITE_URL}</a>
        </Link>
      </h2>
    </div>
  );
};

export default Tickets;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lastFewTickets = await db
    .ref("tickets")
    .orderByChild("number")
    .limitToLast(10)
    .once("value")
    .then((snap) => snap.val());
  const ticketsArr: Ticket[] = Object.values(lastFewTickets);
  ticketsArr.sort((a: Ticket, b: Ticket) => a.number - b.number);
  return {
    props: {
      tickets: ticketsArr,
    },
    revalidate: 60,
  };
};
