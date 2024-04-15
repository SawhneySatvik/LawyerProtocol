import React from 'react';

function AboutUsSection() {
    return (
        <section id="aboutus">
            <div className="team-container">
                <div className="team-content">
                    <h1>Team Resilience</h1>
                    <h4>Our team is comprised of 2nd year computer science students who are passionate about software and sustainable development.</h4>
                </div>
                <div className="card-container-team" id="card-team-1 team" >
                    <div className="card-team" id="card-team-2 b" >
                        <img src="./src/assets/images/teamLead.png" alt="Team Lead- Satvik Sawhney" />
                        <h2>Satvik Sawhney</h2>
                        <p>I am a CSE student specializing in AI and ML, pursuing a BTech degree at SRM Institute of Science and Technology. Additionally, I am enrolled in the BSc Data Science and Applications program at the IIT Madras.</p>
                    </div>
                    <div className="card-team" id="card-team-3 c" >
                        <img src="./src/assets/images/team1.png" alt="Team Lead- Satvik Sawhney" />
                        <h2>Ishita Goel</h2>
                        <p>I am a CSE AI&ML, pursuing a BTech degree at SRM University. I am also pursuing BSc Data Science and Applications from IIT Madras. I love to design, code, read and write.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsSection;
