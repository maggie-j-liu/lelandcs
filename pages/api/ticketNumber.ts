import { NextApiRequest, NextApiResponse } from "next";
import { db, auth } from "@/utils/admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.redirect(303, "/404");
    return;
  }
  const body = JSON.parse(req.body);
  const { idToken } = body;
  if (!idToken) {
    res.status(400).send("No idToken");
    return;
  }
  const uid = await auth
    .verifyIdToken(idToken)
    .then((decodedToken) => decodedToken.uid)
    .catch((e) => res.status(400).send("invalid id token"));
  const ticketNum = await db
    .ref(`tickets/${uid}/number`)
    .once("value")
    .then((snap) => snap.val());
  res.status(200).json(ticketNum);
}
