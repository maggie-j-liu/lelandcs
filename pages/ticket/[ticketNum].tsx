import { GetStaticPaths, GetStaticProps } from "next";
import Ticket from "@/components/Ticket";
import formatTicketNum from "@/utils/formatTicketNum";
import getTicket from "@/utils/getTicket";
import Head from "next/head";
import { SITE_URL } from "@/utils/constants";
import Link from "next/link";
import GlowTitle from "@/components/GlowTitle";
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
        <meta name="twitter:card" content={"summary_large_image"} />
      </Head>
      <div
        className={
          "w-full h-screen flex flex-col justify-center items-center gap-8 p-8"
        }
      >
        <GlowTitle
          as="h1"
          className="font-mono text-2xl sm:text-4xl max-w-lg text-center font-semibold"
        >
          Join Leland Computer Science Club!
        </GlowTitle>
        <div className="ticket-xxs xs:ticket-xs sm:ticket-sm md:ticket-md lg:ticket-lg">
          <Ticket
            ticketNum={formatTicketNum(ticketNum)}
            photoURL={photoURL}
            displayName={displayName}
            bgColor={"bg-gray-900"}
          />
        </div>
        <h2 className={"text-lg text-gray-400 font-medium font-mono"}>
          <Link href={"/"}>
            <a>{SITE_URL}</a>
          </Link>
        </h2>
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
      revalidate: 30,
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
