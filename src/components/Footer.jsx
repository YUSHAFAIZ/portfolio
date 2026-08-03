import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">
            Yusha Faiz Ansari
          </h3>

          <p className="mt-2 text-slate-400">
            Frontend Developer | React.js Enthusiast
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6 text-2xl">

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-400">

        <p className="flex items-center justify-center gap-2">
          Built with
          <FaHeart className="text-red-500" />
          using React & Tailwind CSS
        </p>

        <p className="mt-2">
          © {new Date().getFullYear()} Yusha Faiz Ansari. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;