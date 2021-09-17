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
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.status(401).send("Unauthorized");
    return;
  }
  const credentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(credentials, "base64").toString();
  if (
    decodedCredentials !==
    process.env.GOOGLE_FORM_USERNAME + ":" + process.env.GOOGLE_FORM_PASSWORD
  ) {
    res.status(401).send("Unauthorized");
    return;
  }

  const email = req.body["Email"].trim();
  const encodedEmail = encoder.encode(email);
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
