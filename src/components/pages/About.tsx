import bgImg from "../../assets/images/van-sec.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image w-full h-auto" />
            <div className="about-page-content p-6 text-center">
                <h1 className="text-3xl font-bold mb-4">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="text-lg mb-4">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="text-lg mb-6">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta bg-yellow-300 text-black p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}