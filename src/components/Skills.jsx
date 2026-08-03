import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-5xl text-cyan-400" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-5xl text-yellow-400" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-5xl text-orange-600" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-5xl text-yellow-300" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-5xl text-blue-400" />,
  },
  {
    name: "REST APIs",
    icon: <SiPostman className="text-5xl text-orange-500" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Here are the technologies and tools I use to build modern,
            responsive, and scalable web applications.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-700"
            >

              {skill.icon}

              <h3 className="mt-5 text-center font-semibold">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;