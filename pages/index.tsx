import GradientTitle from "@/components/GradientTitle";
import Head from "next/head";
import LearnCodeShare from "@/components/LearnCodeShare";
import HomepageCTA from "@/components/HomepageCTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leland CS Club Signup</title>
      </Head>
      <main className={"space-y-24 mt-16 mb-24"}>
        <section>
          <HomepageCTA />
        </section>
        <section className={"max-w-6xl mx-auto w-full"}>
          <LearnCodeShare />
        </section>
      </main>
    </div>
  );
}
