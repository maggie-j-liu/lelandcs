import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/admin";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.redirect(303, "/404");
    return;
  }
  console.log(req.body);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.status(401).send("Unauthorized");
    return;
  }
  const credentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(credentials, "base64").toString();
  if (
    decodedCredentials !==
    process.env.DISCORD_BOT_USERNAME + ":" + process.env.DISCORD_BOT_PASSWORD
  ) {
    res.status(401).send("Unauthorized");
    return;
  }
  const { id, add } = req.body;
  const linkedUser = await db
    .ref(`discordIDToUID/${id}`)
    .once("value")
    .then((snap) => snap.val());
  if (linkedUser) {
    await db.ref().update({
      [`discordServerMembers/${id}`]: add ? true : null,
      [`users/${linkedUser}/joinedServer`]: add,
    });
  }

  res.status(200).send("Success");
}
