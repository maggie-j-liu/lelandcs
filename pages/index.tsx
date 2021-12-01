import LearnCodeShare from "@/components/LearnCodeShare";
import HomepageCTA from "@/components/HomepageCTA";
import SEO from "@/components/SEO";
import GlowTitle from "@/components/GlowTitle";
import Navbar from "@/components/Navbar";

export default function Home() {
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
      </main>
    </div>
  );
}
