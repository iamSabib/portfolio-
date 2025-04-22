import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_USER_ID,
                
            )
            .then((response) => {
                alert("Email sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                alert("Failed to send email.");
                console.error("Error:", error);
            });
    };

    return (
        <div className="card w-full max-w-3xl bg-base-100 shadow-md mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center">Drop a message 📩 </h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full mb-3"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full mb-3"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full mb-3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Send Email
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
