import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-white text-3xl font-semibold">{children}</h3>;
};

const Creator = ({ name, link }: { name: string; link?: string }) => {
  if (link) {
    return (
      <p>
        by{" "}
        <a
          className="gradient-border border-b light-gradient font-medium"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </p>
    );
  }
  return (
    <p>
      by <span className="light-gradient font-medium">{name}</span>
    </p>
  );
};

const ProjectCard = ({
  link,
  children,
}: {
  link?: string;
  children?: ReactNode;
}) => {
  if (link) {
    return (
      <a className="group" href={link} target="_blank" rel="noreferrer">
        <div className="relative">
          <div className="blur absolute inset-0 bg-gradient-to-r from-fuchsia to-blue" />
          <div className="opacity-0 group-hover:opacity-100 group-hover:duration-150 duration-500 blur absolute inset-0 bg-gradient-to-r from-fuchsia to-blue" />
          <div className="relative bg-gray-900 rounded-md py-6 px-6 h-full">
            {children}
          </div>
        </div>
      </a>
    );
  }
  return (
    <div className="relative">
      <div className="blur absolute inset-0 bg-gradient-to-r from-fuchsia to-blue" />
      <div className="relative bg-gray-900 rounded-md py-6 px-6 h-full">
        {children}
      </div>
    </div>
  );
};
ProjectCard.Title = Title;
ProjectCard.Creator = Creator;
export default ProjectCard;
