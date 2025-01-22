import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import '../css/hostVansTabs.css'

interface VanInfo {
    id: string;
    name: string;
    type: string;
    description: string;
    price: number;
}

function HostVansPrice() {
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
        <div className="host-van-tab host-van-price">
            <h3>${information.price}<span>/day</span></h3>
        </div>
    )
}

export default HostVansPrice