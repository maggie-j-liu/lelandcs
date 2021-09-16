import GlowTitle from "./GlowTitle";

const LearnHackShip = () => {
  return (
    <div className={"space-y-12"}>
      <div>
        <GlowTitle as="h2" className={"text-6xl font-bold mb-4"}>
          Learn. 🔮
        </GlowTitle>
        <p className={"text-xl max-w-4xl"}>
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
        <GlowTitle as="h2" className={"text-6xl font-bold mb-4"}>
          Hack. 🧑‍💻
        </GlowTitle>
        <p className={"text-xl max-w-4xl"}>
          Hack together projects, not banks! After you learn the basics, it’s
          time to get{" "}
          <span className={"light-gradient font-medium"}>hacking*</span>! With
          your new knowledge, you’ll be able to create something{" "}
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
        <GlowTitle as="h2" className={"text-6xl font-bold mb-4"}>
          Ship. 🚀
        </GlowTitle>
        <p className={"text-xl max-w-4xl"}>
          Once you’ve made something you’re proud of, it’s time to{" "}
          <span className={"border-b-2 gradient-border border-dashed"}>
            ship it
          </span>
          ! Show it to your friends, your parents, and everyone else.
        </p>
      </div>
    </div>
  );
};

export default LearnHackShip;
