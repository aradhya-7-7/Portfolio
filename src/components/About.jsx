import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>As a recent graduate with a passion for coding, I'm thrilled to present my developer portfolio. With proficiency in MERN stack, Vue.js, Vite.js and Next.js , I've crafted projects showcasing my problem-solving abilities, attention to detail, and collaborative spirit. From responsive websites to intuitive mobile apps, each project reflects my commitment to innovation and excellence. I'm eager to contribute my skills to impactful projects and further expand my knowledge in software development.As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/code.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;