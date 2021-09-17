import { NextApiRequest, NextApiResponse } from "next";
import { db, auth } from "@/utils/admin";
// @ts-ignore
import encoder from "firebase-key-encode";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.redirect(303, "/404");
    return;
  }
  const email = req.body["Email"].trim();
  const encodedEmail = encoder.encode(email);
  console.log(req.headers.authorization);
  let user = null;
  try {
    user = await auth.getUserByEmail(email);
  } catch (e) {
    console.log(e);
    console.log("no user");
  }
  if (user === null) {
    await db.ref("googleFormSubmissions").update({
      [encodedEmail]: true,
    });
  } else {
    console.log(user.uid);
    console.log(encodedEmail);
    await db.ref().update({
      [`googleFormSubmissions/${encodedEmail}`]: true,
      [`users/${user.uid}/formSubmitted`]: true,
    });
  }

  res.status(200).send("Success");
}
