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
  const { idToken, info } = body;
  if (!idToken || !info) {
    res.status(400).send("No idToken or info");
    return;
  }
  const uid = await auth
    .verifyIdToken(idToken)
    .then((decodedToken) => decodedToken.uid)
    .catch((e) => res.status(400).send("invalid id token"));
  if (info === "userStatus") {
    const status = await db
      .ref(`users/${uid}`)
      .once("value")
      .then((snap) => snap.val());
    res.status(200).json({
      discordUID: status.discordUID ?? false,
      formSubmitted: !!status.formSubmitted,
      inServer: !!status.joinedServer,
    });
  } else if (info === "ticketNumber") {
    const ticketNumber = await db
      .ref(`tickets/${uid}/number`)
      .once("value")
      .then((snap) => snap.val());
    res.status(200).json({ ticketNumber });
  } else {
    res.status(400).send(`${info} is not a valid info`);
  }
}
