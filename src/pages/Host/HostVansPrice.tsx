import { useOutletContext } from "react-router-dom";
import '../css/hostVansTabs.css';

interface Van {
    id: string;
    name: string;
    price: number;
    type: string;
    imageUrl: string;
    hostId: string;
}

interface HostVansDetailContext {
    currentVan: Van | null;
}

export default function HostVansPrice() {
    const { currentVan } = useOutletContext<HostVansDetailContext>();

    return (
        <div className="host-van-price">
            <h3 className="host-van-price-title">${currentVan?.price}<span>/day</span></h3>
        </div>
    );
}