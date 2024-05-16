import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Aradhya's Portfolio
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1wqc1VJAKy0EjXQHs16gD24HTgAgruByy/view?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;