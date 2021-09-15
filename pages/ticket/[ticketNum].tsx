import { GetStaticPaths, GetStaticProps } from "next";
import Ticket from "@/components/Ticket";
import formatTicketNum from "@/utils/formatTicketNum";
import getTicket from "@/utils/getTicket";
import Head from "next/head";
import { SITE_URL } from "@/utils/constants";
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
    <>
      <Head>
        <meta
          property="og:image"
          content={`${SITE_URL}/api/ticket-image/${ticketNum}`}
        />
      </Head>
      <div className={"w-full h-screen flex justify-center items-center"}>
        <div className="ticket-xxs xs:ticket-xs sm:ticket-sm md:ticket-md lg:ticket-lg">
          <Ticket
            ticketNum={formatTicketNum(ticketNum)}
            photoURL={photoURL}
            displayName={displayName}
            bgColor={"bg-gray-900"}
          />
        </div>
      </div>
    </>
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
  const ticketInfo = await getTicket(params?.ticketNum as string);
  if (ticketInfo.invalid) {
    return {
      notFound: true,
    };
  } else if (ticketInfo.notFound) {
    return {
      notFound: true,
      revalidate: 60,
    };
  } else {
    return {
      props: {
        ticketNum: ticketInfo.ticketNum,
        displayName: ticketInfo.displayName,
        photoURL: ticketInfo.photoURL,
      },
    };
  }
};
