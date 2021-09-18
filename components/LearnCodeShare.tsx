import GlowTitle from "./GlowTitle";

const LearnCodeShare = () => {
  return (
    <div
      className={
        "space-y-12 pl-6 pr-8 xs:pr-14 sm:pr-16 md:pr-20 lg:pr-6 max-w-4xl mx-auto"
      }
    >
      <div>
        <GlowTitle as="h2" className={"homepage-heading"}>
          Learn. 🔮
        </GlowTitle>
        <p className={"homepage-paragraph"}>
          No prior experience needed. You’ll learn everything you need to know
          to make a great project. From{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            competitive programming
          </span>{" "}
          to{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            machine learning
          </span>
          , you’ll learn everything you need to know to...
        </p>
      </div>
      <div>
        <GlowTitle as="h2" className={"homepage-heading"}>
          Code. 💻
        </GlowTitle>
        <p className={"homepage-paragraph"}>
          After you learn the basics, it’s time to get{" "}
          <span className={"light-gradient font-medium"}>hacking*</span>! With
          your new knowledge, you’ll be able to code something{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            innovative
          </span>
          ,{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            delightful
          </span>{" "}
          or{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            wacky
          </span>{" "}
          that you can...
        </p>
        <p className={"mt-2"}>
          <span className={"light-gradient font-medium"}>*hacking</span>: using
          your creativity and ingenuity to put together a project
        </p>
      </div>
      <div>
        <GlowTitle as="h2" className={"homepage-heading"}>
          Share. 🚀
        </GlowTitle>
        <p className={"homepage-paragraph"}>
          Once you’ve made something you’re proud of, it’s time to{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            ship it
          </span>
          ! Share it with your friends, your parents, and everyone else.
        </p>
      </div>
    </div>
  );
};

export default LearnCodeShare;
