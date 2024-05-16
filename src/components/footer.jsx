const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Aradhya's Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )
}

export default Footer;