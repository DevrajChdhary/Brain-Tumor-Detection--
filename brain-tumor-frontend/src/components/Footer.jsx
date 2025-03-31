import React from 'react'

function Footer() {
    return (
        <footer className="footer bg-gray-800 text-white py-6 sm:py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm sm:text-base">&copy; <span id="current-year"></span> Neuro Detect. All rights reserved.</p>
                <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <a href="mailto:devrajkohli475@gmail.com" className="text-sm sm:text-base hover:text-purple-400 transition-colors duration-300">
                        <i className="fa fa-envelope mr-2"></i>Contact Us
                    </a>
                    <a href="https://www.linkedin.com/in/devraj-choudhary-4907a4221/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-purple-400 transition-colors duration-300">
                        <i className="fab fa-linkedin mr-2"></i>LinkedIn
                    </a>
                    <a href="https://github.com/DevrajChdhary" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-purple-400 transition-colors duration-300">
                        <i className="fab fa-github mr-2"></i>GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer