// src/ContactForm.js
import React from 'react';
import './ContactForm.css'; // Import the CSS file

class ContactForm extends React.Component {
    
        state = {
            name: '',
            email: '',
            message: '',
            showSuccess: false,
        };
    

        handleChange = (event) => {
            const { value } = event.target;
            
            // Explicitly updating each state variable
            if (event.target.name === 'name') {
                this.setState({ name: value });
            } else if (event.target.name === 'email') {
                this.setState({ email: value });
            } else if (event.target.name === 'message') {
                this.setState({ message: value });
            }
        };

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh

        // Display success message
        this.setState({ showSuccess: true });

        // Optionally, clear the form fields
        this.setState({
            name: '',
            email: '',
            message: '',
        });

        // Hide the success message after a few seconds
        setTimeout(() => {
            this.setState({ showSuccess: false });
        }, 1000); // Change this duration as needed
    };

    render() {
        return (
            <div className="container">
                <h1>Contact Us</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        placeholder="Your Message"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
                {this.state.showSuccess && (
                    <div id="successMessage">
                        <div className="checkmark">&#10003;</div>
                        <p>Your message has been sent successfully!</p>
                    </div>
                )}
            </div>
        );
    }
}

export default ContactForm;