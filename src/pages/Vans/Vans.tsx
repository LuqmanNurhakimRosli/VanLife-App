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


    //nak filter by type
    const displayedVans = typeFilter
    ? vans.filter( van => van.type === typeFilter)
    : vans;

    //nak dsiplay render  semua vans based on useEffect
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

      function handleFilterChange(key: string, value: string | null) {
        setSearchParams((prev) => {
          if (value === null) {
            prev.delete(key);
          } else {
            prev.set( key, value);
          }
            return prev;    
        })

      }
    
      return (
        <div className="van-list-container">
          <h1>Explore our van options</h1>

          <div className="filter-container">
            {/* //dua-dua cara boleh */}

            {/* <Link to="?type=simple">Simple</Link>
            <Link to="?type=luxury">Luxury</Link>
            <Link to="?type=rugged">Rugged</Link>
            <Link to=".">Clear</Link> */}

<button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

              </div>

          <div className="van-list">
            {vanElements}
          </div>
        </div>
      );
    }