import React from 'react'

function HeroSection() {
    return (

        <section id="hero" className="min-h-screen flex items-center justify-center relative">
            <canvas id="dna-animation" className="absolute top-0 left-0 w-full h-full"></canvas>
            <div className="text-center relative z-10 px-4 sm:px-0">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-5 animate-float"><span className="gradient-text">AI-Powered Brain Tumor Detection</span>🧠</h1>
                <p className="text-xl sm:text-2xl mb-6 sm:mb-8">Harness the power of artificial intelligence for quick and accurate brain tumor analysis.</p>
                <a href="#detection" className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold rounded-full py-2 sm:py-3 px-6 sm:px-8 hover:from-purple-600 hover:to-teal-500 transition duration-300 text-base sm:text-lg">Start Detection</a>
            </div>
        </section>
    )
}

export default HeroSection