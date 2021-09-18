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
  const { idToken, discordID } = body;
  if (!idToken) {
    res.status(400).send("No idToken");
    return;
  }
  const uid = await auth
    .verifyIdToken(idToken)
    .then((decodedToken) => decodedToken.uid)
    .catch((e) => res.status(400).send("invalid id token"));
  const inServer = await db
    .ref(`users/${uid}/joinedServer`)
    .once("value")
    .then((snap) => snap.val());
  res.status(200).json(!!inServer);
}
