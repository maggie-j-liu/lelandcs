import GradientTitle from "@/components/GradientTitle";
import Head from "next/head";
import SignInButton from "@/components/SignInButton";
import useUser from "@/utils/useUser";
import Link from "next/link";

export default function Home() {
  const { user, loading } = useUser();
  return (
    <div>
      <Head>
        <title>Leland CS Club Signup</title>
      </Head>
      <main>
        <div className={"my-12"}>
          <h1
            className={
              "px-8 sm:px-12 md:px-24 text-center text-7xl sm:text-8xl md:text-9xl font-black space-y-4 mb-8"
            }
          >
            <GradientTitle text={"Learn."} transitionClass={"animate-title1"} />
            <GradientTitle text={"Hack."} transitionClass={"animate-title2"} />
            <GradientTitle text={"Ship."} transitionClass={"animate-title3"} />
          </h1>
          <h2 className={"text-2xl sm:text-3xl text-center"}>
            Leland Computer Science Club.
          </h2>
          <div
            className={
              "flex flex-col lg:flex-row items-center justify-center gap-x-3 text-xl lg:text-2xl px-8 sm:px-12 md:px-24"
            }
          >
            <div>Mondays 3:30 - 4:30 @ F-2</div>{" "}
            <div className={"hidden lg:block"}> &bull; </div>
            <div className={"block lg:hidden"}> ~ </div>
            <div>Wednesdays 3:30 - 4:30 @ E-8</div>
          </div>
          <h2
            className={
              "vertical-text font-medium w-max text-2xl sm:text-3xl md:text-4xl text-center fixed right-4 top-4"
            }
          >
            Leland Computer Science Club
          </h2>
          <div className={"px-8 sm:px-12 md:px-24"}>
            <div className={"flex flex-col items-center text-xl"}>
              <div className={"relative mt-8"}>
                {loading ? null : user ? (
                  <Link href={"/dashboard"}>
                    <a
                      className={
                        "text-2xl font-medium px-4 py-2 relative bg-white text-gray-900 rounded-md peer"
                      }
                    >
                      Get your ticket
                    </a>
                  </Link>
                ) : (
                  <SignInButton
                    className={
                      "text-2xl font-medium px-4 py-2 relative bg-white text-gray-900 rounded-md peer"
                    }
                  >
                    Sign In
                  </SignInButton>
                )}
                <div
                  className={
                    "absolute z-[-10] -inset-1 blur-md bg-gradient-to-r from-fuchsia to-blue backdrop-blur-3xl animate-pulse-gradient hover:animate-none peer-hover:animate-none hover:opacity-100 peer-hover:opacity-100"
                  }
                />
                <div
                  className={
                    "absolute z-[-10] -inset-1 blur-md bg-gradient-to-r from-fuchsia to-blue backdrop-blur-3xl opacity-75"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
