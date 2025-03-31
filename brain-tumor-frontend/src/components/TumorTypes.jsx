import React from 'react'

function TumorTypes() {
    return (
        <section id="tumors" className="py-12 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center fade-in"><span className="gradient-text">Types of Brain Tumors</span>🧬</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-10 text-center fade-in">Understanding the different types of brain tumors is crucial for accurate diagnosis and treatment. Here are some of the most common types:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="flip-card fade-in">
                    <div className="flip-card-inner neumorph">
                        <div className="flip-card-front bg-gradient-to-br from-purple-100 to-teal-100 p-4">
                            <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-dna text-4xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mt-3 text-purple-700">Glioma</h3>
                            <p className="text-center text-purple-800">Tumors that occur in the brain and spinal cord, originating in glial cells.</p>
                        </div>
                        <div className="flip-card-back bg-purple-100 p-4">
                            <h3 className="text-2xl font-semibold mb-2 text-purple-700">Glioma</h3>
                            <p className="text-purple-800 mb-4">Gliomas are tumors that develop from glial cells in the brain and spinal cord. They can affect brain function and be life-threatening depending on their location and growth rate.</p>
                            <h4 className="font-semibold mt-2 text-purple-700">Common Symptoms:</h4>
                            <ul className="list-disc list-inside text-purple-800">
                                <li>Headaches</li>
                                <li>Seizures</li>
                                <li>Vision problems</li>
                                <li>Personality changes</li>
                            </ul>
                            <a href="https://my.clevelandclinic.org/health/diseases/21969-glioma" className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="flip-card fade-in">
                    <div className="flip-card-inner neumorph">
                        <div className="flip-card-front bg-gradient-to-br from-teal-100 to-purple-100 p-4">
                            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-brain text-4xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 text-teal-700">Meningioma</h3>
                            <p className="text-center text-teal-800">Tumors that form on membranes covering the brain and spinal cord.</p>
                        </div>
                        <div className="flip-card-back bg-teal-100 p-4">
                            <h3 className="text-2xl font-semibold mt-3 text-teal-700">Meningioma</h3>
                            <p className="text-teal-800 mb-4">Meningiomas are tumors that arise from the meninges, the membranes surrounding the brain and spinal cord. They are often slow-growing and may not cause symptoms for years.</p>
                            <h4 className="font-semibold mt-2 text-teal-700">Common Symptoms:</h4>
                            <ul className="list-disc list-inside text-teal-800">
                                <li>Headaches</li>
                                <li>Hearing loss or ringing in the ears</li>
                                <li>Vision problems</li>
                                <li>Memory loss</li>
                            </ul>
                            <a href="https://my.clevelandclinic.org/health/diseases/17858-meningioma" className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="flip-card fade-in">
                    <div className="flip-card-inner neumorph">
                        <div className="flip-card-front bg-gradient-to-br from-purple-100 to-teal-100 p-4">
                            <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                                <i className="fas fa-microscope text-4xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 text-purple-700">Pituitary Tumor</h3>
                            <p className="text-center text-purple-800">Tumors that develop in the pituitary gland at the base of the brain.</p>
                        </div>
                        <div className="flip-card-back bg-purple-100 p-4">
                            <h3 className="text-2xl font-semibold mt-4 text-purple-700">Pituitary Tumor</h3>
                            <p className="text-purple-800 mb-4">Pituitary tumors are abnormal growths that develop in the pituitary gland. They can affect hormone production and cause various endocrine system disorders.</p>
                            <h4 className="font-semibold mt-2 text-purple-700">Common Symptoms:</h4>
                            <ul className="list-disc list-inside text-purple-800">
                                <li>Headaches</li>
                                <li>Vision problems</li>
                                <li>Hormonal imbalances</li>
                                <li>Fatigue</li>
                            </ul>
                            <a href="https://my.clevelandclinic.org/health/diseases/15328-pituitary-adenomas" className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TumorTypes