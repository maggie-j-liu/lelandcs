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

const projectData: ProjectProps[] = [];

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
          {projectData.length == 0 && (
            <div className="text-center my-16 text-2xl font-light">
              No projects yet! Check back soon to see some cool creations.
            </div>
          )}
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
