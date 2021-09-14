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
  const { idToken, name, email, photo } = body;
  if (!idToken) {
    res.status(400).send("No idToken");
  }
  const uid = await auth
    .verifyIdToken(idToken)
    .then((decodedToken) => decodedToken.uid)
    .catch((e) => res.status(400).send("invalid id token"));
  await db.ref(`users/${uid}`).set({
    name: name ?? "",
    email: email ?? "",
    photo: photo ?? `https://robohash.org/${uid}?set=set4`,
  });
  res.status(200).send("Success");
}
