import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container flex flex-col items-center text-center p-6">
            <h1 className="text-4xl font-bold mb-4">You got the travel plans, we got the travel vans.</h1>
            <p className="text-lg mb-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans" className="button">Find your van</Link>
        </div>
    )
};