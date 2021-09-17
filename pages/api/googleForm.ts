import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.redirect(303, "/404");
    return;
  }
  console.log(req.body);
  const body = JSON.parse(req.body);
  console.log(body);
  res.status(200).send("Success");
}
