import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/hostvans.css";

interface Van {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

function HostVans() {
  const [vans, setVans] = React.useState<Van[]>([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElements = vans.map((van) => (
    <Link to={van.id} key={van.id} className="van-link">
      <div className="van-tile">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} className="van-image" />
        <div className="van-info">
          <h3 className="van-name">{van.name}</h3>
          <p className="van-price">${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="host-vans">
      <h1 className="host-vans-title">Your Listed Vans</h1>
      <div className="vans-list">
        {vansElements.length > 0 ? (
          <section className="vans-grid">{vansElements}</section>
        ) : (
          <h2 className="loading-message">Loading...</h2>
        )}
      </div>
    </section>
  );
}

export default HostVans;