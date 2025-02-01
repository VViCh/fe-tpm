import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import ContactUsStyle from '../styles/ContactUs.module.css';

const ContactUs = () => {
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

    //     emailjs
    //         .sendForm(
    //             'SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'USER_ID',
    //         )
    //         .then(
    //             () => {
    //                 alert('Message sent successfully!');
    //                 formRef.current.reset();
    //             },
    //             (error) => {
    //                 console.error('Failed to send message:', error);
    //                 alert('Failed to send message. Please try again.');
    //             }
    //         );
    };

    return (
        <div className={ContactUsStyle.container}>
            <div className={ContactUsStyle.componentHeader}>
                <span className={ContactUsStyle.leftImage}></span>
                <h1>Contact Us</h1>
                <img src="/Phone.png" alt="Phone" className={ContactUsStyle.rightImage} />
            </div>
            <div className={ContactUsStyle.contactFormContainer}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label className={ContactUsStyle.inputLabel}>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={ContactUsStyle.inputField}
                        required
                    />
                    <label className={ContactUsStyle.inputLabel}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={ContactUsStyle.inputField}
                        required
                    />
                    <label className={ContactUsStyle.inputLabel}>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className={ContactUsStyle.inputField}
                        required
                    />
                    <label className={ContactUsStyle.inputLabel}>Message</label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        className={ContactUsStyle.inputField}
                        required
                    ></textarea>
                    <div className={ContactUsStyle.buttonContainer}>
                        <button type="submit" className={ContactUsStyle.submitButton}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;