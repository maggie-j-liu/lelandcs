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
  const email = req.body["Email"].trim();
  console.log(req.headers.authorization);
  let user = null;
  try {
    user = await auth.getUserByEmail(email);
  } catch (e) {
    console.log(e);
    console.log("no user");
  }
  if (user === null) {
    db.ref("googleFormSubmissions").update({
      email: true,
    });
  } else {
    db.ref().update({
      [`googleFormSubmissions/${email}`]: true,
      [`users/${user.uid}/formSubmitted`]: true,
    });
  }

  res.status(200).send("Success");
}
