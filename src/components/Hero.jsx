import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpeg"
        className="profile-img"
        width={300}
        height={300}
        alt="Joe's personal headshot"
      />
      <div className="hero-text">
        <h1>Hello, I'm Aradhya👋</h1>
        <p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Recent graduate from Madan Mohan Malaviya University of Technology,",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "specializing in MERN stack development and DSA 🎓. ",
              1000,
              "Passionate about crafting efficient applications and eager to dive into tech's dynamic world 💻",
              1000,
              "Let's code the future together! 🚀",
              1000,
            ]}
            wrapper="span"
            speed={70}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/mech7code"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/aradhya-7-7"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aradhya-srivastava-33b2682b1/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://medium.com/@aradhya610"
            aria-label="Medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
