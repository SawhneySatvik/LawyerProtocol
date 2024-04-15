import React from 'react';

function ProblemGoals() {
    return (
        <section className="problem">
            <div>
                <h1>Sustainable Development Goals Targeted</h1>

                <div className="card-container">
                    <div className="card" id="card-1">
                        <h1>Peace, Justice and Strong Institutions</h1>
                        <p>Legal Awareness: Lawyer Up empowers individuals with knowledge about the legal frameworks and regulations in different cities. The web app contributes to the establishment and reinforcement of just and inclusive institutions.</p>
                    </div>
                    <div className="card" id="card-2">
                        <h1>Partnerships</h1>
                        <p>Lawyer Up fosters global partnerships by providing information on legal requirements in various countries. The app encourages collaboration and understanding worldwide. The app can serve as a platform for legal professionals to connect and collaborate, fostering partnerships that transcend geographical boundaries.</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card" id="card-3">
                        <h1>Reduced Inequalities</h1>
                        <p>Lawyer Up contributes to reducing inequalities by providing everyone, regardless of background or nationality, with access to essential legal information. This empowers individuals to navigate legal systems more effectively, promoting a more equitable application of the law.</p>
                    </div>
                    <div className="card" id="card-4">
                        <h1>Gender Equality</h1>
                        <p>Lawyer Up includes information on gender-related laws and regulations, promoting awareness about gender equality. Users can access details on relevant legal frameworks, helping to empower individuals to exercise their rights and address gender-based issues.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProblemGoals;
