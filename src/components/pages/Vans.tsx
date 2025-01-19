import {useState,useEffect} from 'react';

interface Van {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
}

const Vans = () => {
    const [vans, setVans] = useState<Van[]> ([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

    const vansElement = vans.map(van => (
        <div key={van.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
                src={van.imageUrl} 
                alt={van.name} 
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{van.name}</h3>
                    <p className="text-lg font-semibold text-green-600">${van.price}/day</p>
                </div>
                <i className={`inline-block px-4 py-2 rounded-full text-sm font-semibold capitalize
                    ${van.type === 'simple' ? 'bg-orange-100 text-orange-700' : 
                    van.type === 'luxury' ? 'bg-black text-white' : 
                    'bg-green-100 text-green-700'}`}>
                    {van.type}
                </i>
            </div>
        </div>
    ))

    return (
        <div className="bg-gray-50 min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Explore Our Van Options
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vansElement}
                </div>
            </div>
        </div>
    )
};

export default Vans;