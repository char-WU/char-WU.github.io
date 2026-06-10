import projectsData from "@/data/projects.json";
import ProjectCard, { Project } from "./ProjectCard";

export default function Projects() {
  const projects = projectsData.projects as Project[];

  return (
    <div className="-mx-5 flex flex-col gap-2">
      {projects.map((p) => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </div>
  );
}
