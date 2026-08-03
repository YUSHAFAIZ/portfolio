import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            I'm currently looking for Frontend Developer internship and
            full-time opportunities. Feel free to connect with me.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-blue-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-400">
                    yushafaiza@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl text-blue-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-400">
                    +91 6398161067
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-blue-500" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-400">
                    Dehradun, Uttarakhand
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 flex flex-col justify-center">

            <div className="flex justify-center gap-8 text-3xl">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            <a
              href="mailto:yushafaiza@gmail.com"
              className="mt-10 rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold transition hover:bg-blue-700"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;