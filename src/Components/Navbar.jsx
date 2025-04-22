import ThemeToggle from "./ThemeToggle";


const Navbar = () => {

    const links = <>
        
        <li><a href="/#me">About Me</a></li>
        <li><a href="/#skill">Skills</a></li>
        <li><a href="/#edu">Education</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
        
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tanzim Rahman</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Resume</a>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Navbar;