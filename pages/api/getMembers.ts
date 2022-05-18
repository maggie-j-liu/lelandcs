import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

const getMembers = async (req: NextApiRequest, res: NextApiResponse) => {
  const memberFiles = (
    await fs.readdir(`${process.cwd()}/data/members`)
  ).filter((file) => file.endsWith(".json"));

  const fileContents = await Promise.all(
    memberFiles.map((file) =>
      fs.readFile(`${process.cwd()}/data/members/${file}`, "utf8")
    )
  );
  const members = fileContents
    .map((file) => {
      console.log(file.replaceAll("“", '"'));
      return JSON.parse(file.replaceAll("“", '"').replaceAll("”", '"'));
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  res.json({ members });
};

export default getMembers;
