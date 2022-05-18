import LearnCodeShare from "@/components/LearnCodeShare";
import HomepageCTA from "@/components/HomepageCTA";
import SEO from "@/components/SEO";
import GlowTitle from "@/components/GlowTitle";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Member {
  name: string;
  github: string;
  bio: string;
}
export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    const getMembers = async () => {
      const res = await fetch("/api/getMembers").then((res) => res.json());
      setMembers(res.members);
    };
    getMembers();
  }, []);
  return (
    <div>
      <SEO title="Leland Computer Science Club" url="" />

      <Navbar />
      <main className={"space-y-24 mt-16 mb-24"}>
        <section>
          <HomepageCTA />
        </section>
        <section className={"max-w-4xl mx-auto w-full"}>
          <LearnCodeShare />
        </section>
        <section className={"max-w-4xl px-6 mx-auto w-full"}>
          <GlowTitle as="h3" className="homepage-subheading">
            Links
          </GlowTitle>
          <div className={"gap-2 flex flex-col text-sm homepage-paragraph"}>
            <div>
              <span className={"font-medium"}>Registration form:</span>{" "}
              <a
                className={
                  "gradient-border border-b-2 font-bold hover:light-gradient"
                }
                href="https://forms.gle/aGxrYH3v7cGdDgxH6"
              >
                https://forms.gle/aGxrYH3v7cGdDgxH6
              </a>
            </div>
            <div>
              <span className={"font-medium"}>Discord Server:</span>{" "}
              <a
                className={
                  "gradient-border border-b-2 font-bold hover:light-gradient"
                }
                href="https://discord.gg/bVxW6B9yDt"
              >
                https://discord.gg/bVxW6B9yDt
              </a>
            </div>
            <div>
              <span className={"font-medium"}>Email:</span>{" "}
              <a
                className={
                  "gradient-border border-b-2 font-bold hover:light-gradient"
                }
                href="mailto:lelandcomputerscience@gmail.com"
              >
                lelandcomputerscience@gmail.com
              </a>
            </div>
          </div>
        </section>
        <section className={"max-w-4xl px-6 mx-auto w-full"}>
          <GlowTitle as="h2" className="homepage-heading">
            Members
          </GlowTitle>
          <p className="homepage-paragraph">
            Are you a Leland CS Club member? Add yourself to this list by
            submitting a pull request to{" "}
            <a
              href="https://github.com/maggie-j-liu/lelandcs"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 gradient-border hover:light-gradient font-bold"
            >
              https://github.com/maggie-j-liu/lelandcs
            </a>
            .
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {members.map((member) => (
              <div
                key={member.github}
                className="group relative border-4 border-fuchsia-300 rounded-2xl px-2 py-4"
              >
                <div className="group-hover:blur-lg flex flex-col items-center">
                  <Image
                    width={300}
                    height={300}
                    alt={`${member.name}'s profile picture`}
                    src={`https://github.com/${member.github}.png`}
                  />
                  <div className="text-center font-semibold text-xl">
                    {member.name}
                  </div>
                  <div className="text-center hover:lighter-gradient font-medium">
                    @{member.github}
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 duration-0 group-hover:duration-200 absolute inset-0 px-4 py-4 flex flex-col justify-center">
                  <div className="text-center font-semibold text-xl">
                    {member.name}
                  </div>
                  <a
                    className="text-center hover:lighter-gradient font-medium"
                    href={`https://github.com/${member.github}`}
                  >
                    @{member.github}
                  </a>
                  <div className="h-4" />
                  <p className="text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
