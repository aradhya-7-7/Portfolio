import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hello, I'm Aradhya👋</h1>
                <p>
                Recent graduate from Madan Mohan Malaviya University of Technology, specializing in MERN stack development and DSA 🎓. Passionate about crafting efficient applications and eager to dive into tech's dynamic world 💻. Let's code the future together! 🚀
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
    )
}

export default Hero;