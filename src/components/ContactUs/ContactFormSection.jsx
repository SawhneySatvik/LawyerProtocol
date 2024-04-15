import React from 'react';

function ContactFormSection() {
    return (
        <section className="contactus-form">

            <div className="map-container"></div>

            <div className="container-form">
                <div className="cform">
                    <h1>Contact Us</h1>
                    <form action="">
                        <div className="form_container">
        
                            <div className="form_control">
                                <label htmlFor="first-name">First Name</label>
                                <input 
                                    id="first-name" 
                                    name="first-name" 
                                    placeholder="Enter First Name..."
                                />
                            </div>
        
                            <div className="form_control">
                                <label htmlFor="last-name">Last Name </label>
                                <input 
                                    id="last-name" 
                                    name="last-name" 
                                    placeholder="Enter Last Name..."
                                />
                            </div>
        
                            <div className="form_control">
                                <label htmlFor="email">Email </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter Email..."
                                />
                            </div>
        
                            <div className="form_control">
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    type="phone" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Enter Phone..."
                                />
                            </div>
        
                            <div className="text_area_control">
                                <label htmlFor="message">Message<br /></label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5"
                                    cols="34"
                                    placeholder="Enter Message..."
                                ></textarea>
                            </div>
                            
                            <div className="form_control">
                                <label htmlFor="city">City</label>
                                <input 
                                    id="city" 
                                    name="city" 
                                    placeholder="Enter City Name..."
                                />
                            </div>
        
                            <div className="form_control">
                                <label htmlFor="country">Country</label>
                                <input
                                    id="country" 
                                    name="country" 
                                    placeholder="Enter Country..."
                                />
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit">Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactFormSection;
