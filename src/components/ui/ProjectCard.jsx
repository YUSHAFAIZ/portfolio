const ProjectCard = ({
  image,
  title,
  description,
  tech,
  github,
  live,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition duration-300 hover:-translate-y-2 hover:border-blue-500">

      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-5 py-2 font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;