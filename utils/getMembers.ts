import fs from "fs/promises";

const getMembers = async () => {
  const memberFiles = (
    await fs.readdir(`${process.cwd()}/data/members`)
  ).filter((file) => file.endsWith(".json"));

  const fileContents = await Promise.all(
    memberFiles.map((file) =>
      fs.readFile(`${process.cwd()}/data/members/${file}`, "utf8")
    )
  );
  const members = fileContents
    .map((file) => JSON.parse(file))
    .sort((a, b) => a.name.localeCompare(b.name));
  return members;
};

export default getMembers;
