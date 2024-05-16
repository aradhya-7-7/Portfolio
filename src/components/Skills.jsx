const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-node-js node-icon"></i>
                    <p>Node</p>
                </div>
                <div className="skill-card mongodb">
                    <i className="fa-solid fa-database"></i>
                    <p>MongoDB</p>
                </div>
                <div className="skill-card git">
                    <i className="fa-brands fa-git-alt"></i>
                    <p>git</p>
                </div>
                <div className="skill-card vue">
                    <i className="fa-brands fa-vuejs"></i>
                    <p>Vue.js</p>
                </div>
                <div className="skill-card C">
                    <i className="fa-sharp fa-solid fa-c"></i>
                    <p>C language</p>
                </div>
                <div className="skill-card C">
                    <i className="a-sharp fa-solid fa-terminal"></i>
                    <p>CLI</p>
                </div>
                <div className="skill-card C++">
                    <i className="font-roboto font-bold">C++</i>
                    <p>C++</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;