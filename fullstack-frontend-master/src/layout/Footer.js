import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-light p-3 text-center">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;