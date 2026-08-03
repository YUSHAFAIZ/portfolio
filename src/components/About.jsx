import siteConfig from "../data/siteConfig";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Get to know me
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold">
              Frontend Developer & React Enthusiast
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I am a passionate Frontend Developer currently pursuing my
              B.Tech in Computer Science and Engineering. I enjoy building
              responsive, user-friendly, and modern web applications using
              React.js and JavaScript.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              During my internship, I contributed to developing School ERP
              modules including Dashboard, Attendance, Fee Management, and
              Profile pages. I enjoy solving real-world problems through clean,
              scalable, and reusable code.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                5+
              </h3>

              <p className="mt-2 text-slate-300">
                Projects
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                1
              </h3>

              <p className="mt-2 text-slate-300">
                Internship
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                10+
              </h3>

              <p className="mt-2 text-slate-300">
                Technologies
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                2027
              </h3>

              <p className="mt-2 text-slate-300">
                Graduation
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;