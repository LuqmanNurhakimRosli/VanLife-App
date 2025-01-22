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

export default function HostVansPhotos() {
    const { currentVan } = useOutletContext<HostVansDetailContext>();

    return (
        <div className="host-van-photos">
            <img 
                src={currentVan?.imageUrl} 
                alt={`Photo of ${currentVan?.name}`}
                className="van-detail-image"
            />
        </div>
    );
}