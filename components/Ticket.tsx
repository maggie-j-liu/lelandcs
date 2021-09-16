import Image from "next/image";
const Ticket = ({
  photoURL,
  displayName,
  ticketNum,
  bgColor,
}: {
  photoURL: string;
  displayName: string;
  ticketNum: string | null;
  bgColor: string;
}) => {
  return (
    <div
      className={
        "rounded-md relative ticket-xxs xs:ticket-xs sm:ticket-sm md:ticket ticket-vars w-[var(--width)] h-[var(--height)] bg-gray-900 border-[length:var(--border)] border-fuchsia"
      }
    >
      <div
        className={
          "flex items-center w-[var(--circle-width)] h-[var(--circle-height)] rounded-r-full bg-fuchsia absolute top-1/2 -translate-y-1/2"
        }
      >
        <div
          className={`w-[var(--circle-width)] h-[calc(var(--circle-height)-2*var(--border))] ${bgColor} translate-x-[calc(-1*var(--border))] rounded-r-full`}
        />
      </div>
      <div
        className={
          "z-10 flex items-center w-[var(--circle-width)] h-[var(--circle-height)] rounded-l-full bg-fuchsia absolute right-0 top-1/2 -translate-y-1/2 translate-x-[var(--border)]"
        }
      >
        <div
          className={`w-[calc(var(--circle-width)-var(--border))] h-[calc(var(--circle-height)-2*var(--border))] ${bgColor} translate-x-[var(--border)] rounded-l-full`}
        />
      </div>
      <div className={"relative h-full"}>
        <div
          className={
            "flex flex-col justify-between px-5 xs:px-7 sm:px-10 md:px-14 py-2 xs:py-4 sm:py-6 md:py-8 h-full"
          }
        >
          <div className={"flex items-center gap-x-1 xs:gap-x-2 md:gap-x-4"}>
            <div
              className={
                "w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full overflow-hidden relative border md:border-2 border-fuchsia-400"
              }
            >
              <Image src={photoURL} layout="fill" objectFit="contain" />
            </div>
            <h3 className={"text-xs xs:text-base md:text-3xl font-semibold"}>
              {displayName}
            </h3>
          </div>
          <div className={"relative"}>
            <span
              className={
                "text-base xs:text-xl sm:text-2xl md:text-4xl font-semibold gradient absolute left-[0.07rem] xs:left-[0.08rem] md:left-[0.1rem] select-none"
              }
              aria-hidden={true}
            >
              Learn. Hack. Ship.
            </span>
            {[...Array(3)].map((_, idx) => (
              <span
                className={
                  "text-base xs:text-xl sm:text-2xl md:text-4xl font-semibold gradient absolute blur-sm select-none"
                }
                key={idx}
                aria-hidden={true}
              >
                Learn. Hack. Ship.
              </span>
            ))}
            <h4
              className={
                "relative w-max text-base xs:text-xl sm:text-2xl md:text-4xl font-semibold"
              }
            >
              Learn. Hack. Ship.
            </h4>
            <div
              className={
                "flex flex-col md:flex-row text-[0.4rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-medium"
              }
            >
              <p>
                <span
                  className={
                    "font-semibold bg-gradient-to-r from-fuchsia to-blue-400 text-transparent bg-clip-text"
                  }
                >
                  Mondays
                </span>{" "}
                3:30 - 4:30 @ F-2
              </p>
              <span className={"hidden md:block mx-2"}>&bull;</span>
              <p>
                <span
                  className={
                    "font-semibold bg-gradient-to-r from-fuchsia to-blue-400 text-transparent bg-clip-text"
                  }
                >
                  Wednesdays
                </span>{" "}
                3:30 - 4:30 @ E-8
              </p>
            </div>
            <p
              className={
                "text-[0.4rem] xs:text-[0.5rem] sm:text-xs md:text-sm text-gray-200 font-light sm:mt-2 font-mono"
              }
            >
              Leland Computer Science Club
            </p>
          </div>
        </div>
        <div
          className={
            "absolute w-[calc(var(--circle-width)+var(--circle-height))] h-full bg-fuchsia right-0 top-0"
          }
        />
        <div
          className={
            "vertical-text absolute right-[var(--circle-width)] top-1/2 h-[calc(var(--circle-height)-2*var(--border))] flex justify-center items-center"
          }
        >
          <div
            className={
              "-translate-x-1/2 text-base xs:text-lg sm:text-3xl md:text-4xl tracking-wider font-mono"
            }
          >
            {ticketNum !== null && `#${ticketNum}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
