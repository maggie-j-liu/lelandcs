import { NextApiRequest, NextApiResponse } from "next";
import screenshot from "@/utils/screenshot";
import { SITE_URL } from "@/utils/constants";
import { db } from "@/utils/admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ticketNum } = req.query;
  /*
  const ticketInfo = await getTicket(ticketNum as string, false);
  if (ticketInfo.invalid || ticketInfo.notFound) {
    res.redirect(303, "/404");
    return;
  }
  */
  const url = `${SITE_URL}/ticket/${ticketNum}`;
  const file = await screenshot(url);
  res.setHeader("Content-Type", `image/png`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  );
  res.status(200).send(file);
}
