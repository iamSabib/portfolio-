import project_1 from "../assets/project_1.png";
import jslogo from "../assets/js.png";
import expresslogo from "../assets/express.png";
import mongodblogo from "../assets/mongodb.png";
import reactlogo from "../assets/react-original-wordmark.svg";
import tailwindslogo from "../assets/Tailwind_CSS_logo.svg.png";
import firebaseLogo from "../assets/firebase.png";

const HoneyMeal = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-lg rounded-lg mt-10">
            <figure className="mb-4">
                <img className="w-full rounded-lg" src={project_1} alt="Honey Meal Project" />
            </figure>
            
            <h2 className="text-3xl font-bold mb-2 mt-16">Honey Meal - Hostel Meal Management System</h2>
            <p className="text-lg mb-4">
                A modern and interactive hostel meal management system built using the MERN stack.
                This platform allows students to view, review, and manage meals while enabling admins to
                oversee meal planning and user management. It ensures a smooth and hassle-free experience
                with secure authentication, real-time updates, and a seamless payment system.
            </p>
            
            <div className="mb-6 mt-12">
                <h3 className="text-2xl font-semibold mb-2">Main Technology Stack</h3>
                <div className="flex gap-4 mt-2 items-center flex-wrap">
                    <img src={reactlogo} alt="React.js" className="h-16" />
                    <img src={expresslogo} alt="Express.js" className=" h-20" />
                    <img src={mongodblogo} alt="MongoDB" className=" h-12" />
                    <img src={jslogo} alt="JavaScript" className=" h-16" />
                    <img src={tailwindslogo} alt="Tailwind CSS" className="h-7" />
                    <img src={firebaseLogo} alt="Firebase" className="h-13" />
                </div>
            </div>
            
            <div className="mt-12 mb-6">
                <h3 className="text-xl font-semibold mb-2">Live Project & GitHub</h3>
                <p className="">Live Site: <a href="https://honey-meal.web.app/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Honey Meal - Live</a></p>
                <p>GitHub Repository: <a href="https://github.com/iamSabib/Honey-Meal" className="text-blue-500" target="_blank" rel="noopener noreferrer">Honey Meal - Client</a></p>
            </div>
            
            <div className="mb-6 mt-12">
                <h3 className="text-xl font-semibold mb-2">Challenges Faced</h3>
                <ul className="list-disc list-inside">
                    <li>Ensuring real-time updates for meal management and reviews with minimal latency.</li>
                    <li>Integrating secure authentication using Firebase while maintaining a smooth user experience.</li>
                    <li>Implementing <strong>JWT authentication</strong> alongside <strong>Axios interceptors</strong> to detect and log out malicious users attempting to use stolen or modified tokens.</li>
                    <li>Handling payment system integration securely with Stripe API to support membership payments.</li>
                    <li>Maintaining a fully <strong>responsive and accessible UI</strong> that works across different devices and screen sizes.</li>
                    <li>Optimizing database queries and API responses to ensure a <strong>scalable and efficient</strong> backend system.</li>
                </ul>
            </div>
            
            <div className="mb-6 mt-12">
                <h3 className="text-xl font-semibold mb-2">Potential Improvements & Future Plans</h3>
                <ul className="list-disc list-inside">
                    <li>Adding AI-based meal recommendation based on user preferences and dietary restrictions.</li>
                    <li>Implementing push notifications for real-time meal updates and schedule changes.</li>
                    <li>Enhancing the analytics dashboard for admins to track user engagement, meal popularity, and payment insights.</li>
                    <li>Improving role-based access control to allow <strong>more granular permissions</strong> for different admin levels.</li>
                </ul>
            </div>
        </div>
    );
};

export default HoneyMeal;
