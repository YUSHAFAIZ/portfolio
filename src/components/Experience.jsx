const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            My internship experience where I worked on real-world projects and
            gained practical frontend development skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 rounded bg-slate-700"></div>

          {/* Timeline Item */}
          <div className="relative mb-12 pl-16">

            {/* Circle */}
            <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-500 bg-slate-950"></div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500">

              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

                <div>
                  <h3 className="text-2xl font-bold">
                    Frontend Developer Intern
                  </h3>

                  <p className="mt-2 text-blue-500">
                    Jasmine Fiore Pvt. Ltd.
                  </p>
                </div>

                {/* <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  May 2025 - July 2025
                </span> */}

              </div>

              <ul className="mt-8 space-y-4 text-slate-400">

                <li>
                  ✅ Developed responsive web applications using React.js,
                  JavaScript, HTML, CSS, and Tailwind CSS.
                </li>

                <li>
                  ✅ Built School ERP modules including Dashboard, Student
                  Attendance, Teacher Attendance, Profile, and Fee Management.
                </li>

                <li>
                  ✅ Integrated REST APIs and collaborated with the development
                  team to deliver production-ready features.
                </li>

                <li>
                  ✅ Improved UI responsiveness and user experience across
                  multiple client projects.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;