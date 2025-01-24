import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
import "../css/vans.css";

// Define the Van interface
interface Van {
    id: string;
    name: string;
    price: number;
    type: string;
    imageUrl: string;
}

export default function Vans() {
    const [vans, setVans] = React.useState<Van[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true); // Add loading state
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    React.useEffect(() => {
        async function loadVans() {
            try {
                const data = await getVans();
                setVans(data);
            } catch (error) {
                console.error("Error fetching vans:", error);
            } finally {
                setLoading(false); // Set loading to false after fetching data
            }
        }

        loadVans();
    }, []);

    // Filter vans by type
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans;

    // Map over displayed vans to create van elements
    const vanElements = displayedVans.map((van) => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
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
                prev.set(key, value);
            }
            return prev;
        });
    }

    return (
        <div className="van-list-container">
            <h1 className="header-title">Explore our van options</h1>

            <div className="filter-container">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}
            </div>

            <div className="van-list">
                {loading ? ( // Show loading message if data is still being fetched
                    <h2 className="loading-message">Loading...</h2>
                ) : vanElements.length > 0 ? ( // Render vanElements if data is loaded
                    vanElements
                ) : (
                    <h2 className="no-vans-message">No vans found.</h2> // Show message if no vans match the filter
                )}
            </div>
        </div>
    );
}