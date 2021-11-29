import emailjs from "emailjs-com";
import React from 'react';
import './Contact.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rabuht6', 'template_j6gzazd', e.target, 'user_Ojex8iFZl3VaUUo1v0xs9')
            .then((result) => {
                console.log(result.status);
                if (result.status === 200) {
                    alert('Thanks for submit')
                }
            }, (error) => {
                alert(error.text);
            });
        // e.target.reset()
    }

    return (
        <section className="contact-container pb-5">
            <div className="container">
                <form onSubmit={sendEmail}>

                    <div className="row pt-5 mx-auto">

                        <div className="col-8 form-group mx-auto">
                            <h2 className="text-white fw-bold">Contact Me</h2>
                            <div className="line2  mb-4"></div>
                            <input type="text" className="form-control form-input mb-2 p-3" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control form-input mb-2 p-3" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control form-input mb-2 p-3" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control form-input p-3" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="secondary-button mt-3" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}