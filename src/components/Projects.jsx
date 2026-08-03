import projects from "../data/projects";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Some of my recent projects showcasing my frontend development
            skills, responsive UI design, and real-world application
            development.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;