import { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(''); // Success or error message

    // Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Basic form validation
        if (!name || !email || !message) {
            setStatus('All fields are required!');
            return;
        }

        // Resetting the status before submitting
        setStatus('Submitting...');

        try {
            // Simulate a success response (you can handle the actual response status here)
            setTimeout(() => {
                setStatus('Thank you for your message!');
                setFormData({ name: '', email: '', message: '' }); // Reset the form fields
            }, 1000);
        } catch (error) {
            setStatus('Something went wrong, please try again.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Prenons contact!</h2>
            <p>Tu voudrais que je t'aide à réaliser ton prochain projet, n'hésiste pas à prendre contact!</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom:</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>

            {status && <p>{status}</p>}
        </div>
    );
}

export default ContactForm;
