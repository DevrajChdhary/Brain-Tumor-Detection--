import React from 'react'

function About() {
    return (
        <section id="about" className="neumorph p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 fade-in"><span className="gradient-text">About Neuro Detect</span>📊</h2>
            <p className="text-base sm:text-lg mb-4 fade-in">Neuro Detect leverages advanced deep learning technology, specifically designed for analyzing brain MRI scans, providing fast and accurate tumor classification.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="text-center fade-in">
                    <i className="fas fa-brain text-4xl text-purple-500 mb-4 animate-float"></i>
                    <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
                    <p>Built with EfficientNetB3, our AI model offers cutting-edge feature extraction for superior tumor detection and classification.</p>
                </div>
                <div className="text-center fade-in">
                    <i className="fas fa-tachometer-alt text-4xl text-teal-500 mb-4 animate-float"></i>
                    <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
                    <p>Receive MRI scan results in seconds, delivering real-time insights for quick decision-making and diagnosis.</p>
                </div>
                <div className="text-center fade-in">
                    <i className="fas fa-chart-line text-4xl text-purple-500 mb-4 animate-float"></i>
                    <h3 className="text-xl font-semibold mb-2">Exceptional Accuracy</h3>
                    <p>With an accuracy rate of 99.85%, Neuro Detect ensures reliable and precise classification across multiple tumor types.</p>
                </div>
            </div>

        </section>
    )
}

export default About