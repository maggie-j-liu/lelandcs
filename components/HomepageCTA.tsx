import GradientTitle from "./GradientTitle";
import Link from "next/link";
import SignInButton from "./SignInButton";
import useUser from "@/utils/useUser";
const HomepageCTA = () => {
  const { loading, user } = useUser();
  return (
    <div>
      <div
        className={
          "px-8 sm:px-12 md:px-24 text-center text-7xl sm:text-8xl md:text-9xl font-black space-y-4 mb-8"
        }
      >
        <GradientTitle text={"Learn."} transitionClass={"animate-title1"} />
        <GradientTitle text={"Code."} transitionClass={"animate-title2"} />
        <GradientTitle text={"Share."} transitionClass={"animate-title3"} />
      </div>
      <h2
        className={
          "font-mono xs:text-xl sm:text-2xl md:text-3xl text-center mb-1"
        }
      >
        Leland Computer Science Club.
      </h2>
      <div
        className={
          "flex flex-col lg:flex-row items-center justify-center gap-x-3 text-sm xs:text-base sm:text-xl md:text-2xl px-8 sm:px-12 md:px-24"
        }
      >
        <div>
          <span className={"font-semibold"}>Wednesdays</span> 3:30 - 4:30 @ E-8
        </div>
      </div>
      <div className="px-8 sm:px-12 md:px-24">
        <div className="relative mt-6 w-max mx-auto">
          <a
            className="block duration-300 hover:duration-150 font-mono text-xl hover:scale-110 bg-white text-black px-4 py-2 rounded-lg"
            href="https://forms.gle/4MGuPBgWut4k1HiA6"
            target="_blank"
            rel="noreferrer"
          >
            Interest Form
          </a>
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
        {/* <div
          className={
            "mt-8 gap-8 flex flex-col sm:flex-row justify-center items-center text-xl"
          }
        >
          <div className={"relative"}>
            {loading ? (
              <div className={"border-2 border-transparent w-48 h-12"} />
            ) : (
              <>
                {user ? (
                  <Link href={"/dashboard"}>
                    <a
                      className={
                        "border-2 border-transparent text-xl sm:text-2xl font-medium px-4 py-2 relative bg-white text-gray-900 rounded-md peer"
                      }
                    >
                      Get your ticket
                    </a>
                  </Link>
                ) : (
                  <SignInButton
                    className={
                      "border-2 border-transparent text-xl sm:text-2xl font-medium px-4 py-2 relative bg-white text-gray-900 rounded-md peer"
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
              </>
            )}
          </div>
          <div className={"relative"}>
            <Link href={"/tickets"}>
              <a
                className={
                  "text-xl sm:text-2xl font-medium px-4 py-2 relative text-white bg-gray-900 border-white border-2 rounded-md peer"
                }
              >
                View tickets
              </a>
            </Link>
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
        </div> */}
      </div>
    </div>
  );
};

export default HomepageCTA;
