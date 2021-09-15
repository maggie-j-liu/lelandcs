import { GetStaticPaths, GetStaticProps } from "next";
import { db } from "@/utils/admin";
import Ticket from "@/components/Ticket";
import formatTicketNum from "@/utils/formatTicketNum";
const TicketNum = ({
  ticketNum,
  displayName,
  photoURL,
}: {
  ticketNum: number;
  displayName: string;
  photoURL: string;
}) => {
  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <Ticket
        ticketNum={formatTicketNum(ticketNum)}
        photoURL={photoURL}
        displayName={displayName}
        bgColor={"bg-gray-900"}
      />
    </div>
  );
};

export default TicketNum;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.ticketNum) {
    return {
      notFound: true,
    };
  }
  if (isNaN(+params.ticketNum)) {
    return {
      notFound: true,
    };
  }

  const uid = await db
    .ref(`ticketToId/${+params.ticketNum}`)
    .once("value")
    .then((snap) => snap.val());
  if (!uid) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }
  const thisTicket = await db
    .ref(`tickets/${uid}`)
    .once("value")
    .then((snap) => snap.val());
  return {
    props: {
      ticketNum: +params.ticketNum,
      displayName: thisTicket.name,
      photoURL: thisTicket.photo,
    },
  };
};
