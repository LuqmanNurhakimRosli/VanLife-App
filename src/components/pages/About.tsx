import bgImg from "../../assets/images/vendor2.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <img 
                    src={bgImg} 
                    className="w-full h-[400px] object-cover" 
                    alt="Van life"
                />
                
                <div className="px-6 py-12 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">
                        Don't squeeze in a sedan when you could relax in a van.
                    </h1>
                    
                    <div className="space-y-6 text-lg text-gray-600">
                        <p>
                            Our mission is to enliven your road trip with the perfect travel van rental. 
                            Our vans are recertified before each trip to ensure your travel plans can go 
                            off without a hitch. (Hitch costs extra 😉)
                        </p>
                        <p>
                            Our team is full of vanlife enthusiasts who know firsthand the magic of 
                            touring the world on 4 wheels.
                        </p>
                    </div>

                    <div className="mt-16 bg-orange-100 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Your destination is waiting.<br />Your van is ready.
                        </h2>
                        <Link 
                            to="/vans"
                            className="inline-block bg-black text-white px-8 py-4 rounded-lg 
                                     font-semibold hover:bg-gray-800 transition-colors duration-300"
                        >
                            Explore our vans
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}