import GlowTitle from "@/components/GlowTitle";
import ProjectCard from "@/components/ProjectCard";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface ProjectProps {
  imageSrc: string;
  title: string;
  creatorName: string;
  creatorLink?: string;
  description: string | ReactNode;
  link?: string;
}
const Project = ({
  imageSrc,
  title,
  creatorName,
  creatorLink,
  description,
  link,
}: ProjectProps) => {
  return (
    <ProjectCard link={link}>
      <img className="mb-4" src={imageSrc} />
      <ProjectCard.Title>{title}</ProjectCard.Title>
      <ProjectCard.Creator name={creatorName} link={creatorLink} />
      <p className="mt-4">{description}</p>
    </ProjectCard>
  );
};

const projectData: ProjectProps[] = [
  {
    imageSrc:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    title: "test",
    creatorName: "uwu",
    description: "this is a test",
    link: "https://google.com",
    creatorLink: "https://replit.com",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 xs:px-16 py-16">
        <div className="max-w-5xl mx-auto w-full">
          <GlowTitle as="h1" className="text-6xl font-bold">
            Projects
          </GlowTitle>
          <p className="text-xl font-light mt-4">
            Projects created by our club members!
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {projectData.map((project) => (
              <Project
                key={project.title}
                link={project.link}
                imageSrc={project.imageSrc}
                title={project.title}
                creatorName={project.creatorName}
                creatorLink={project.creatorLink}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Projects;
