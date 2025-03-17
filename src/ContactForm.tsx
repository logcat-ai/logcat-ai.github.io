import { XCircleIcon } from "lucide-react";
import "./style/ContactForm.css";
import React, { useState } from "react";
import { useSnackbar } from "notistack";

interface ContactFormIProps {
    closeModal: () => void;
}

const ContactForm: React.FC<ContactFormIProps> = ({ closeModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [usage, setUsage] = useState("");
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        usage?: string;
    }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        let newErrors: { name?: string; email?: string; usage?: string } = {};

        if (!name.trim()) newErrors.name = "Name is required.";
        if (!email.trim()) newErrors.email = "Email is required.";
        else if (!validateEmail(email))
            newErrors.email = "Invalid email format.";
        if (!usage.trim()) newErrors.usage = "Usage description is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Create contact request data
        const contactData = {
            name: name.trim(),
            email: email.trim(),
            message: usage.trim(),
        };

        try {
            // Clear previous errors
            setErrors({});

            setIsSubmitting(true);
            // Send data to API
            const response = await fetch(
                "https://dev.api.logcat.ai/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            enqueueSnackbar(
                "Thank you for your interest! We will get back to you soon.",
                {
                    variant: "success",
                }
            );
            // Reset form fields
            setName("");
            setEmail("");
            setUsage("");
            closeModal();
        } catch (error) {
            // Handle error
            console.error("Error submitting form:", error);
            enqueueSnackbar("Error submitting form. Please try again.", {
                variant: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fade-in contact-us">
            <div className="form-header">
                <span>Get In Touch</span>
                <span style={{ cursor: "pointer" }} onClick={closeModal}>
                    <XCircleIcon />
                </span>
            </div>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            Name
                            <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            maxLength={50}
                        />
                        {errors.name && (
                            <p className="error-text">{errors.name}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            maxLength={100}
                        />
                        {errors.email && (
                            <p className="error-text">{errors.email}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="use">
                            How do you plan to use logcat.ai?
                            <span style={{ color: "red" }}>*</span>
                        </label>
                        <textarea
                            id="use"
                            className="textarea-field"
                            value={usage}
                            onChange={(e) => setUsage(e.target.value)}
                            maxLength={300}
                        ></textarea>
                        {errors.usage && (
                            <p className="error-text">{errors.usage}</p>
                        )}
                    </div>
                    <div className="button-container">
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
