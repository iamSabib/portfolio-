// import Me from "../assets/ME.png";
import MEpng from '/src/assets/ME.png';
import MEavif from '/src/assets/ME.avif';
import MEwebp from '/src/assets/ME.webp';
import pylogo from '../assets/python.png';
import jslogo from '../assets/js.png'
import javalogo from '../assets/java.png'
import clogo from '../assets/c.png'
import dockerlogo from '../assets/docker.png'
import expresslogo from '../assets/express.png'
import gitlogo from '../assets/git.png'
import htmllogo from '../assets/html.png'
import linuxlogo from '../assets/linux.png'
import mongodblogo from '../assets/mongodb.png'
import mysqllogo from '../assets/mysql.png'
import nodelogo from '../assets/node.png'
import reactlogo from '../assets/react-original-wordmark.svg'
import csslogo from '../assets/css.png'
import threedots from '../assets/three-dots.png'
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../Components/ContactForm";
import { MdEmail } from "react-icons/md";
import project_1 from "../assets/project_1.png";
import project_2 from "../assets/project_2.png";
import project_3 from "../assets/project_3.png";

// import tbg from "../assets/trianglify-lowres.png"



const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div id="hero" className={`hero min-h-screen bg-[url(/cool-background.svg)]`}>
                <div className="hero-content flex-col lg:flex-row xl:gap-10">
                    <picture>
                        <source srcSet={MEavif} type="image/avif" />
                        <source srcSet={MEwebp} type="image/webp" />
                        <img
                            src={MEpng}
                            alt="Tanzim Rahman"
                            className="sm:max-w-md md:max-w-lg xl:max-w-xl lg:max-w-lg max-w-sm rounded-full shadow-xl border-blue-900 border-10 w-full"
                        />
                    </picture>
                    <div>
                        <h1 className="text-5xl font-bold lg:text-white">Tanzim Rahman - Full Stack Developer</h1>
                        <p className="py-6 lg:text-white">
                            Passionate developer specializing in <span className="font-bold">Full-Stack Development</span> with a strong foundation in <span className="font-bold">HCI & Usability</span>. I make cool websited tailoring inclusive design patterns.
                        </p>
                        <div className="flex items-center justify-between mt-2">
                            <a
                                href="https://drive.google.com/file/d/1gtIYglRWSXPKYipUqeRSa9_HmfuW0tez/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn btn-primary">View Resume</button>
                            </a>


                            <div className="flex gap-3">
                                <Link to={"https://github.com/iamSabib "}><button className="text-3xl flex items-center btn btn-circle">
                                    <VscGithub />
                                </button></Link>
                                <Link to={"https://x.com/RahmanTanz40859"}>
                                    <button className="text-3xl flex items-center btn btn-circle p-[5px]">
                                        <FaXTwitter />
                                    </button>
                                </Link>
                                {/* <Link to={"https://www.facebook.com/tanzim.rahman.545/"}>
                                    <button className="text-3xl flex items-center  btn btn-circle">
                                        <FaFacebook />
                                    </button>
                                </Link> */}
                                <Link to={"https://www.linkedin.com/in/tanzim-rahman-122169350/"}>
                                    <button className="text-3xl flex items-center  btn btn-circle">
                                        <FaLinkedin/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me */}
            <div id="me" className="p-10 text-center">
                <h2 className="text-3xl font-bold">🚀 About Me</h2>
                <p className="py-4 text-left">
                    {/* I&apos;m a passionate software engineer with a strong foundation in **Human-Computer Interaction (HCI)** and **usability principles**.
                    I apply user-centered design thinking in my projects to create intuitive and accessible applications. */}
                    I’m a passionate software developer with a deep-rooted love for problem-solving and innovation. My journey in programming began in Class 8 when I had no personal computer at my cadet college. Instead, I wrote code on paper, testing my logic whenever I had limited lab time. My early motivation came from Math Olympiads, where senior-level competitions involved coding solutions to complex problems. This ignited my drive to learn programming—not just to write code but to solve real-world problems.
                    <br />
                    <br />
                    I don’t confine myself to any specific technology—whether frontend, backend, I embrace whatever is necessary to get the job done. I see frameworks and tools as keys to solving problems, not constraints. My ability to quickly learn, adapt, and execute enables me to bridge skill gaps effortlessly.
                    <br />
                    <br />
                    Beyond programming, I’m deeply curious about how technology can drive large-scale innovation, particularly in areas like agriculture, sustainability, and global challenges. I also used to play basketball and believe strongly in teamwork, a positive mindset, and a collaborative work environment. One of my favorite books, The Culture Code, reinforces my belief that a great team thrives on trust, positivity, and shared purpose.
                    <br />
                    <br />
                    I see myself as <strong>&quot;The Positive Doer Man&quot;</strong>—a team player who uplifts others, fosters a supportive atmosphere, and pushes forward with determination. My ultimate goal? To create meaningful solutions that contribute to a world of abundance and progress.
                </p>
            </div>


            {/* Skills Section */}
            <div id="skill" className="p-10 text-center  mx-auto w-fit">
                <h2 className="text-4xl pb-5 font-bold">🔧 Skills & Technologies</h2>

                {/* Grid layout for consistent alignment */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10 place-items-center">

                    {/* Programming & Scripting */}
                    <div className="card min-h-80 justify-center shadow-sm w-full max-w-md px-6 pb-6 border-t-8 border-purple-700 dark:border-purple-00">
                        <h3 className="text-3xl mb-10 font-semibold">💻 Programming & Scripting</h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
                            <img src={pylogo} alt="Python" className="h-16" />
                            <img src={jslogo} alt="JavaScript" className="h-16" />
                            <img src={clogo} alt="C" className="h-16" />
                            <img src={javalogo} alt="Java" className="h-16" />
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="card min-h-80 justify-center shadow-sm w-full max-w-md px-6 pb-6 border-t-8 border-purple-700">
                        <h3 className="text-3xl mb-10 font-semibold">🌐 Frontend</h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
                            <img src={reactlogo} alt="React" className="h-16" />
                            <img src={htmllogo} alt="HTML5" className="h-16" />
                            <img src={csslogo} alt="CSS3" className="h-16" />
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="card min-h-80 justify-center shadow-sm w-full max-w-md px-6 pb-6 border-t-8 border-purple-700">
                        <h3 className="text-3xl mb-10 font-semibold">🔧 Backend</h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
                            <img src={nodelogo} alt="Node.js" className="h-11" />
                            <img src={expresslogo} alt="Express.js" className="h-20" />
                            <img src={mongodblogo} alt="MongoDB" className="h-12" />
                            <img src={mysqllogo} alt="MySQL" className="h-15" />
                        </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="card min-h-80 justify-center shadow-sm w-full max-w-md px-6 pb-6 border-t-8 border-purple-700">
                        <h3 className="text-3xl mb-10 font-semibold">🛠 DevOps & Tools</h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
                            <img src={dockerlogo} alt="Docker" className="h-16" />
                            <img src={gitlogo} alt="Git" className="h-16" />
                            <img src={linuxlogo} alt="Linux" className="h-16" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Education Section */}
            <div id="edu" className="p-10">
                <h2 className="text-3xl font-bold mb-10 text-center">🎓 Education</h2>
                <div className="card bg-base-100 max-w-96 w-full shadow-lg mx-auto border border-gray-200 rounded-xl">
                    <div className="card-body p-6 text-center">
                        <h2 className="card-title text-2xl font-semibold">🎓 B.Sc. in Computer Science</h2>
                        <p className="text-sm text-gray-600">BRAC University</p>
                        <p className="font-medium text-lg mt-2">2021 - 2025</p>
                        <p className="badge badge-outline mt-2">Undergraduate</p>
                        <p className="text-xs text-gray-500 mt-3">
                            Kha 224, Pragati Sarani, Merul Badda, Dhaka 1212, Bangladesh
                        </p>
                    </div>
                </div>
                <div>
                    <img src={threedots} alt="" className="mt-4 mx-auto h-10" />
                </div>
                <div className="card bg-base-100 shadow-lg mx-auto border border-gray-200 rounded-xl mt-4 w-full max-w-96">
                    <div className="card-body p-6 text-center">
                        <h2 className="card-title text-2xl font-semibold">🏫 HSC in Science</h2>
                        <p className="text-sm text-gray-600">Military Collegiate School Khulna</p>
                        <p className="font-medium text-lg mt-2">2018 - 2020</p>
                        <p className="badge badge-outline mt-2">Higher Secondary</p>
                        <p className="text-xs text-start text-gray-500 mt-3">
                            Phultola, Khulna, Bangladesh
                        </p>
                    </div>
                </div>


            </div>

            {/* Projects Section */}
            <div id="projects" className="p-10">
                <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
                <div className="container mx-auto flex flex-wrap justify-around gap-y-10 gap-x-1">
                    {/* project 1 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={project_1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Honey Meal</h2>
                            <p>Honey Meal is a modern Hostel Management system designed for university students, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project allows students to log in, view, and review meals offered in their university hostel, while administrators can manage meal data, reviews, and student subscriptions.</p>
                            <div className="card-actions justify-end">
                                <Link to={"/honey-meal"}><button className="btn btn-primary">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={project_2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Consult Hive</h2>
                            <p>The Hive Web App lets users manage services (add, update, delete), book services, and track service statuses. Built with React, Express, and MongoDB, it features email and Google login, dynamic routes, a responsive design, and a functional dashboard. With JWT authentication and smooth booking, it ensures a secure and seamless user experience</p>
                            <div className="card-actions justify-end">
                                <Link to="/consult-hive">

                                    <button className="btn btn-primary">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* project 3 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={project_3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Movie Mania</h2>
                            <p>The Movie Mania is a user-friendly platform designed to simplify the process of exploring movies, viewing details, managing favorites, and performing CRUD operations like adding and deleting movies. The platform features a dynamic UI, robust functionality, and a seamless user experience, ensuring smooth navigation and accessibility across all devices.</p>
                            <div className="card-actions justify-end">
                                <Link to="/movie-mania">
                                    <button className="btn btn-primary">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Contact Me */}
            <div id="contact" className="p-10 text-center">
                <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
                <div className="flex justify-between max-w-xl mx-auto gap-4 mt-4 flex-wrap">
                    <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-2 ">
                            <FaPhoneAlt className="text-xl" /> +8801836255564
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaWhatsapp className="text-green-600 text-2xl" /> +8801836255564
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex justify-end">

                            <MdEmail className="text-3xl" />
                        </div>
                        <p className="italic">tanzimrahman1415@gmail.com</p>
                    </div>
                </div>
                <div className="mt-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Home;
