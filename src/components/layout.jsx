import Navbar from './navbar';
import Footer from './footer';
import { Contact } from './contact';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Contact />
            <Footer />
        </>
    )
}

export default Layout;