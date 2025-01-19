import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="container mx-auto px-6 py-20 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    You got the travel plans, we got the travel vans.
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                    Add adventure to your life by joining the #vanlife movement. 
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link 
                    to="vans"
                    className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg 
                             text-xl font-semibold hover:bg-orange-600 transition-colors duration-300"
                >
                    Find your van
                </Link>
            </div>
        </div>
    )
}