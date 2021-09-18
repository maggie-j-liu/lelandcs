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
  if (!idToken || discordID === undefined) {
    res.status(400).send("No idToken");
    return;
  }
  const uid = await auth
    .verifyIdToken(idToken)
    .then((decodedToken) => decodedToken.uid)
    .catch((e) => res.status(400).send("invalid id token"));

  if (discordID === "") {
    await db.ref().update({
      [`users/${uid}/discordUID`]: null,
      [`users/${uid}/joinedServer`]: false,
    });
    res.status(200).send("Success");
    return;
  }
  const inServer = await db
    .ref(`discordServerMembers/${discordID}`)
    .once("value")
    .then((snap) => snap.val());
  await db.ref().update({
    [`users/${uid}/discordUID`]: discordID,
    [`users/${uid}/joinedServer`]: !!inServer,
    [`discordIDToUID/${discordID}`]: uid,
  });
  res.status(200).send("Success");
}
