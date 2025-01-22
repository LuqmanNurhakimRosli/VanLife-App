import React from "react";
import { useParams, Link } from "react-router-dom";
import "../css/hostvansdetail.css";

interface Van {
    id: string;
    name: string;
    price: number;
    type: string;
    imageUrl: string;
    hostId: string;
}

export default function HostVansDetail() {
    const { id } = useParams();
    const [currentVan, setCurrentVan] = React.useState<Van | null>(null);

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentVan(data.vans);
            })
    }, [id])

    if (!currentVan) {
        return <h2>Loading...</h2>;
    }

    return (
        <section className="host-van-detail-section">
             <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} alt={`Photo of ${currentVan.name}`} />
                    <div className="host-van-detail-info">
                        <i className={`van-type ${currentVan.type} selected`}>
                            {currentVan.type}
                        </i>
                        <h2>{currentVan.name}</h2>
                        <p className="van-price">
                            <span>${currentVan.price}</span>/day
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 