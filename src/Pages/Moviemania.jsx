import project_3 from "../assets/project_3.png";
import jslogo from "../assets/js.png";
import expresslogo from "../assets/express.png";
import mongodblogo from "../assets/mongodb.png";
import reactlogo from "../assets/react-original-wordmark.svg";
import tailwindslogo from "../assets/Tailwind_CSS_logo.svg.png";
import firebaseLogo from "../assets/firebase.png";

const Moviemania = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-base-100 shadow-lg rounded-lg mt-10">
            <figure className="mb-4 border-1 border-t-3 pb-2 rounded-lg">
                <img className="w-full rounded-lg" src={project_3} alt="Consult Hive Project" />
            </figure>

            <h2 className="text-3xl font-bold mb-2 mt-16">Movie Mania - Dynamic Movie Portal</h2>
            <p className="text-lg mb-4">
            Movie Mania is an engaging movie portal that lets users explore movies, manage favorites, and add new movies to the platform. 
                The app features a modern, responsive design to ensure a smooth experience across all devices. With user authentication, search functionality, 
                and customizable themes, Movie Mania provides a rich user experience for movie lovers.
            </p>

            <div className="mb-6 mt-12">
                <h3 className="text-2xl font-semibold mb-2">Main Technology Stack</h3>
                <div className="flex gap-4 mt-2 items-center flex-wrap">
                    <img src={reactlogo} alt="React.js" className="h-16" />
                    <img src={expresslogo} alt="Express.js" className="h-20" />
                    <img src={mongodblogo} alt="MongoDB" className="h-12" />
                    <img src={jslogo} alt="JavaScript" className="h-16" />
                    <img src={tailwindslogo} alt="Tailwind CSS" className="h-7" />
                    <img src={firebaseLogo} alt="Firebase" className="h-13" />
                    {/* <img src={daisyUILogo} alt="DaisyUI" className="h-10" /> */}
                </div>
            </div>

            <div className="mt-12 mb-6">
                <h3 className="text-xl font-semibold mb-2">Live Project & GitHub</h3>
                <p className="">Live Site: <a href="https://movie-mania-0.web.app/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Consult Hive - Live</a></p>
                <p>GitHub Repository: <a href="https://github.com/iamSabib/Movie-Mania" className="text-blue-500" target="_blank" rel="noopener noreferrer">Consult Hive - Client</a></p>
            </div>

            <div className="mb-6 mt-12">
                <h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
                <ul className="list-disc list-inside">
                    <li>Implementing secure user authentication with Google login and password validation.</li>
                    <li>Ensuring smooth data synchronization between the front-end and back-end for the movie database.</li>
                    <li>Handling authentication-based routes and ensuring authorized users can add, update, and delete movies.</li>
                    <li>Creating a responsive and aesthetically appealing interface that works well on all screen sizes.</li>
                    <li>Incorporating a rating system with React Simple Star Rating to improve user interaction with the movies.</li>
                </ul>
            </div>

            <div className="mb-6 mt-12">
                <h3 className="text-xl font-semibold mb-2">Potential Improvements & Future Plans</h3>
                <ul className="list-disc list-inside">
                    <li>Adding a movie recommendation engine based on user preferences and ratings.</li>
                    <li>Integrating an API for up-to-date movie details like trailers and reviews.</li>
                    <li>Expanding the search functionality to filter movies by multiple criteria such as genre, rating, and year.</li>
                    <li>Adding more user interactions like movie comments, ratings, and watchlists.</li>
                    <li>Improving the design further with animations and transitions for a more engaging experience.</li>
                </ul>
            </div>
        </div>
    );
};

export default Moviemania;