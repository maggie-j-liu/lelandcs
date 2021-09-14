const GradientTitle = ({
  text,
  transitionClass,
}: {
  text: string;
  transitionClass: string;
}) => {
  return (
    <div className={"relative"}>
      <span className={"absolute inset-0"} aria-hidden={true}>
        {text}
      </span>
      <div
        className={`relative mx-auto w-max bg-gradient-to-r from-fuchsia to-blue pb-3 -mb-3 bg-clip-text text-transparent ${transitionClass}`}
      >
        {text}
      </div>
    </div>
  );
};

export default GradientTitle;
