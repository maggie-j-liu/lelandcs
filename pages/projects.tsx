import GlowTitle from "@/components/GlowTitle";
import ProjectCard from "@/components/ProjectCard";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import projectData from "data/projects";

export interface Creator {
  name: string;
  link?: string;
}
export interface ProjectProps {
  imageSrc?: StaticImageData;
  title: string;
  creators: Creator[];
  description: string | ReactNode;
  link?: string;
  code?: string;
}

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
            Projects created by our club members and from events we organized!
          </p>
          {projectData.length == 0 && (
            <div className="text-center my-16 text-2xl font-light">
              No projects yet! Check back soon to see some cool creations.
            </div>
          )}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {projectData.map(
              ({ link, imageSrc, title, creators, description, code }) => (
                <ProjectCard key={title + description} link={link} code={code}>
                  <ProjectCard.Title>{title}</ProjectCard.Title>
                  <ProjectCard.Creators creators={creators} />
                  <p className="mt-4 mb-8">{description}</p>
                  {imageSrc && <Image src={imageSrc} placeholder="blur" />}
                </ProjectCard>
              )
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Projects;
