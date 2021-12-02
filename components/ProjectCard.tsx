import { createContext, Fragment, ReactNode, useContext } from "react";
import { Creator as CreatorType } from "pages/projects";
import { FiExternalLink } from "react-icons/fi";

const LinkContext = createContext<string | null>(null);

const Title = ({ children }: { children: ReactNode }) => {
  const link = useContext(LinkContext);
  if (!link) {
    return <h3 className="text-white text-3xl font-semibold">{children}</h3>;
  }
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
      <h3 className="text-white text-3xl font-semibold">{children}</h3>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center ml-auto gap-2 hover:border-b gradient-border"
      >
        <span className="font-light">visit </span>
        <FiExternalLink className="inline w-5 h-5" />
      </a>
    </div>
  );
};

const Creator = ({ name, link }: { name: string; link?: string }) => {
  if (link) {
    return (
      <a
        className="gradient-border border-b light-gradient font-medium"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    );
  }
  return <span className="light-gradient font-medium">{name}</span>;
};

const Creators = ({ creators }: { creators: CreatorType[] }) => {
  return (
    <p>
      by{" "}
      {creators.map((creator, index) => (
        <Fragment key={creator.name}>
          <Creator name={creator.name} link={creator.link} />
          {index != creators.length - 1 && ", "}
        </Fragment>
      ))}
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
  return (
    <LinkContext.Provider value={link ?? null}>
      <div className="relative group">
        <div className="blur absolute inset-0 bg-gradient-to-r from-fuchsia to-blue" />
        <div className="opacity-0 group-hover:opacity-100 group-hover:duration-150 duration-500 blur absolute inset-0 bg-gradient-to-r from-fuchsia to-blue" />
        <div className="relative bg-gray-900 rounded-md py-6 px-6 h-full">
          {children}
        </div>
      </div>
    </LinkContext.Provider>
  );
};
ProjectCard.Title = Title;
ProjectCard.Creators = Creators;
export default ProjectCard;
