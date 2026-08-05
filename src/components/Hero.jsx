import siteConfig from "../data/siteConfig";
import { useState } from "react";
import Button from "./ui/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialIcon from "./ui/SocialIcon";
import faizImage from "../assets/Faiz.png";
const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-slate-950 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 pt-32 pb-20 lg:flex-row">
        {/* Left Side */}
        <div className="flex-1">
          <p className="mb-4 text-lg text-blue-500">👋 Hello, I'm</p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            {siteConfig.firstName}
            <br />
            {siteConfig.lastName}
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            {siteConfig.role} • {siteConfig.subtitle}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {siteConfig.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>

            <Button
              href={siteConfig.resume}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex items-center gap-6">
            <SocialIcon
              href={siteConfig.github}
              icon={<FaGithub />}
              label="GitHub"
            />

            <SocialIcon
              href={siteConfig.linkedin}
              icon={<FaLinkedin />}
              label="LinkedIn"
            />

            <button
              onClick={copyEmail}
              aria-label="Copy Email"
              className="text-4xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-500"
            >
              <MdEmail />
            </button>
          </div>
        </div>
        {copied && (
          <p className="mt-4 text-sm font-medium text-green-400">
            ✅ Email copied to clipboard!
          </p>
        )}

        {/* Right Side */}

        <div className="flex flex-1 justify-center">
          <div className="relative h-80 w-80">
            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

            {/* Profile Image */}
            <img
              src={faizImage}
              alt="Yusha Faiz Ansari"
              className="relative h-full w-full rounded-full border-4 border-blue-500 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
