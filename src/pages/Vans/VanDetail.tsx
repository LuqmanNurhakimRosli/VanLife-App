import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/vandetail.css';

interface Van {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
}

export default function VanDetail() {
    const params = useParams();
    const location = useLocation();

    const [van, setVan] = useState<Van | null>(null);   

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
            .catch(error => console.error("Error fetching van details:", error));
    }, [params.id]);

    const  search = location.state?.search || "";
    const type = location.state?.type || "All"

    return (
        <div className="van-detail-container">
            <Link to= {`..${search} ` }
                        relative="path"
                        className="back-button"
                        >&larr; <span>Back to {type} vans </span>
                    </Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p className="van-description">{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}