import { useOutletContext } from "react-router-dom";

interface Van {
    id: string;
    name: string;
    price: number;
    type: string;
    imageUrl: string;
    hostId: string;
    description?: string;
}

interface HostVansDetailContext {
    currentVan: Van | null;
}

export default function HostVansInfo() {
    const { currentVan } = useOutletContext<HostVansDetailContext>();
  return (
    <section className="host-van-detail-info">
            <h4>Name: <span>{currentVan?.name}</span></h4>
            <h4>Category: <span>{currentVan?.type}</span></h4>
            <h4>Description: <span>{currentVan?.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
  )
}
