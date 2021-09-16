import { ReactNode } from "react";

const GlowTitle = ({
  children,
  as,
  className = "",
}: {
  children: ReactNode;
  as: keyof JSX.IntrinsicElements;
  className?: string;
}) => {
  const Tag = as;
  return (
    <div className={`relative ${className}`}>
      <Tag className={"z-10 relative"}>{children}</Tag>
      {[...Array(2)].map((_, idx) => (
        <span
          className={"select-none absolute inset-0 gradient blur-sm"}
          aria-hidden={true}
          key={idx}
        >
          {children}
        </span>
      ))}
      <span
        className={"select-none absolute inset-0 gradient blur-md"}
        aria-hidden={true}
      >
        {children}
      </span>
    </div>
  );
};

export default GlowTitle;
