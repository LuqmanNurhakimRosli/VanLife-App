import React from "react";
import { Link } from "react-router-dom";
import './css/vans.css'

// Define the Van interface
interface Van {
    id: string;
    name: string;
    price: number;
    type: string;
    imageUrl: string;
}

export default function Vans() {
    // Use the Van interface in useState
    const [vans, setVans] = React.useState<Van[]>([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error("Error fetching vans:", error));
    }, []);

    const vanElements = vans.map((van) => (
        <div key={van.id} className="van-tile">
          <Link to={`/vans/${van.id}`} >
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </Link>
        </div>
      ));
    
      return (
        <div className="van-list-container">
          <h1>Explore our van options</h1>
          <div className="van-list">
            {vanElements}
          </div>
        </div>
      );
    }