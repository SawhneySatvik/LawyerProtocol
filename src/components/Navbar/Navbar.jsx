

function Navbar() {
    return (
        <nav>
            <h1><a href="#first">LAWYER <i>UP</i></a></h1>

            <div className="menu">
                <div className="menu-option">
                    <a href="#first"><h4>HOME</h4><img className="nav-home" src="./assets/icons/home.png" alt="home" /></a>
                </div>
                <div className="menu-option">
                    <a href="#head-problem"><h4>PROBLEM SOLVED</h4><img className="nav-home" src="./assets/icons/search.png" alt="problem statement" /></a>
                </div>
                <div className="menu-option">
                    <a href="#subscription"><h4>SUBSCRIBE</h4><img className="nav-home" src="./assets/icons/press-button.png" alt="subscribe" /></a>
                </div>
                <div className="menu-option">
                    <a href="#aboutus"><h4>ABOUT US</h4><img className="nav-home" src="./assets/icons/information.png" alt="about us" /></a>
                </div>
                <button><a href="./lawyer.html">LAWYER</a></button>
            </div>
        </nav>
    );
}

export default Navbar;
