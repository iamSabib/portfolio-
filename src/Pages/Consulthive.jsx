import project_2 from "../assets/project_2.png";
import jslogo from "../assets/js.png";
import expresslogo from "../assets/express.png";
import mongodblogo from "../assets/mongodb.png";
import reactlogo from "../assets/react-original-wordmark.svg";
import tailwindslogo from "../assets/Tailwind_CSS_logo.svg.png";
import firebaseLogo from "../assets/firebase.png";
// import daisyUILogo from "../assets/daisyui.png";

const Consulthive = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-base-100 shadow-lg rounded-lg mt-10">
            <figure className="mb-4">
                <img className="w-full rounded-lg" src={project_2} alt="Consult Hive Project" />
            </figure>
            
            <h2 className="text-3xl font-bold mb-2 mt-16">Consult Hive - Service Sharing Platform</h2>
            <p className="text-lg mb-4">
                Consult Hive is a web application designed to connect users with professional service providers.
                It allows seamless service booking, management, and real-time updates, ensuring an intuitive
                and efficient user experience. The platform supports authentication, CRUD functionality,
                and dynamic service management with a focus on accessibility and responsiveness.
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
                <p className="">Live Site: <a href="https://consulthive-0.web.app/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Consult Hive - Live</a></p>
                <p>GitHub Repository: <a href="https://github.com/iamSabib/Consult-Hive" className="text-blue-500" target="_blank" rel="noopener noreferrer">Consult Hive - Client</a></p>
            </div>
            
            <div className="mb-6 mt-12">
                <h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
                <ul className="list-disc list-inside">
                    <li>Managing authentication state across multiple components for a seamless user experience.</li>
                    <li>Implementing role-based access control to restrict functionalities dynamically.</li>
                    <li>Optimizing API calls and database queries for improved performance.</li>
                    <li>Ensuring a fully responsive UI that adapts well to different screen sizes.</li>
                    <li>Enhancing security with JWT authentication and secure API endpoints.</li>
                </ul>
            </div>
            
            <div className="mb-6 mt-12">
                <h3 className="text-xl font-semibold mb-2">Potential Improvements & Future Plans</h3>
                <ul className="list-disc list-inside">
                    <li>Adding real-time push notifications for booking updates.</li>
                    <li>Integrating an in-app messaging feature for better communication between users and providers.</li>
                    <li>Implementing a secure payment gateway for service transactions.</li>
                    <li>Developing an AI-based service recommendation system based on user preferences.</li>
                    <li>Enhancing the admin dashboard for better platform moderation and insights.</li>
                </ul>
            </div>
        </div>
    );
};

export default Consulthive;
