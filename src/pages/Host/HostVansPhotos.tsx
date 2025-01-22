import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import '../css/hostVansTabs.css'

interface VanInfo {
    id: string;
    name: string;
    type: string;
    description: string;
    imageUrl: string;
}

function HostVansPhotos() {
    const [information, setInformation] = useState<VanInfo | null>(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setInformation(data.vans))
    }, [id])

    if (!information) {
        return <h2 className="loading">Loading...</h2>
    }

    return (
        <div className="host-van-tab host-van-photos">
            <img src={information.imageUrl} alt={`Photo of ${information.name}`} />
        </div>
    )
}

export default HostVansPhotos