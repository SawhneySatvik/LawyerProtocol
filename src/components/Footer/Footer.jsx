import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="heading">
                    <h1>LAWYER <i>UP</i></h1>
                </div>
                <div className="mid-footdr">
                    <p>© Satvik Sawhney 2024</p>
                </div>
                <div className="links">
                    <a href="https://github.com/SawhneySatvik/Lawyer-Up"><img src="./src/assets/icons/githubLogo.png" alt="github" /></a>
                    <a href=""><img src="./src/assets/icons/instagram-icon.png" alt="instagram" /></a>
                    <a href=""><img src="./src/assets/icons/linkedinLogo.png" alt="linkedin" /></a>
                    <a href=""><img src="./src/assets/icons/facebookLogo.png" alt="facebook" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
