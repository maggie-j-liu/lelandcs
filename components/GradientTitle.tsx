const GradientTitle = ({
  text,
  transitionClass,
}: {
  text: string;
  transitionClass: string;
}) => {
  return (
    <div className={"relative"}>
      <span className={"absolute inset-0"}>{text}</span>
      <div
        className={`relative mx-auto w-max gradient ${transitionClass} select-none`}
        aria-hidden={true}
      >
        {text}
      </div>
    </div>
  );
};

export default GradientTitle;
