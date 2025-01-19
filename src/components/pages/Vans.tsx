import {useState,useEffect} from 'react';

interface Van {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
}
const Vans = () => {
const [vans, setVans] = useState<Van[]> ([]);

useEffect(() => {
    fetch('/api/vans')
    .then(res => res.json())
    .then(data => setVans(data.vans))

},[])

const vansElement = vans.map(van => (
    <div key={van.id}>
        <img src={van.imageUrl} alt={van.name} />
        <div>
            <h3>{van.price}</h3>
            <p>${van.price}/day</p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
))

    return (
      <div>
        <h1>Exlpre Our Vans Options</h1>
            <div className='van-list'>
                {vansElement}
            </div>
      </div>
    )
  };
  
  export default Vans;