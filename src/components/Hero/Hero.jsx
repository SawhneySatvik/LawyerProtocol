import React from 'react';

function Hero() {
    return (
        <section id="first" className="hero">
            <div className="hero-container">
                <div className="hero-heading">
                    <h1>Protecting Your <span className="hero-heading-span">Rights,</span><br /> Serving Your Needs</h1>
                </div>
                <div className="hero-subtitle">
                    <p> Our web application will bridge this gap, empowering citizens to navigate their rights safely and responsibly.</p>
                </div>
                <div className="hero-buttons">
                    <button className="button1"><a href="./aboutus.html">What We Do</a></button>
                    <button className="button2"><a href="./contactus.html">Contact Us</a></button>
                </div>
            </div>
        </section>
    );
}

export default Hero;