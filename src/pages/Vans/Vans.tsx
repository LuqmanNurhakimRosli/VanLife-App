import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import '../css/vans.css'

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

    const[searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error("Error fetching vans:", error));
    }, []);

    const displayedVans = typeFilter
    ? vans.filter( van => van.type === typeFilter)
    : vans;
    const vanElements = displayedVans.map((van) => (
        <div key={van.id} className="van-tile">
          <Link to={`/vans/${van.id}`} >
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
            </div>
            <div className="van-type-container">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
          </Link>
        </div>
      ));
    
      return (
        <div className="van-list-container">
          <h1>Explore our van options</h1>

          <div className="filter-container">
            <Link to="?type=simple">Simple</Link>
            <Link to="?type=luxury">Luxury</Link>
            <Link to="?type=rugged">Rugged</Link>
            <Link to=".">Clear</Link>

          </div>

          <div className="van-list">
            {vanElements}
          </div>
        </div>
      );
    }