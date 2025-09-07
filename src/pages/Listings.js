import React, { useEffect, useState, useMemo } from 'react';
import { fetchProperties } from '../services/api';
import '../styles/Listings.css';
import PropertyCard from '../components/ui/PropertyCard';

export default function Listings(){
  const [data,setData]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState('');
  const [type,setType]=useState('all'); const [search,setSearch]=useState('');
  useEffect(()=>{ fetchProperties().then(setData).catch(e=>setError(e.message)).finally(()=>setLoading(false)) },[]);
  const filtered = useMemo(()=>{
    let list = [...data]; if(type!=='all') list = list.filter(d=>d.listingType===type);
    if(search) list = list.filter(d=> d.name?.toLowerCase().includes(search.toLowerCase()) || d.city?.toLowerCase().includes(search.toLowerCase()));
    return list;
  },[data,type,search]);

  return (
    <div className="container">
      <div className="filters">
        <div className="left">
          <button className={type==='all'?'active':''} onClick={()=>setType('all')}>All</button>
          <button className={type==='sale'?'active':''} onClick={()=>setType('sale')}>For Sale</button>
          <button className={type==='rent'?'active':''} onClick={()=>setType('rent')}>For Rent</button>
        </div>
        <input placeholder="Search by name or city" value={search} onChange={e=>setSearch(e.target.value)} />
      </div>

      {loading? <p>Loading...</p> : error? <p className="error">{error}</p> :
        <div className="grid">{filtered.map(i=> <PropertyCard key={i.id} item={i} />)}</div>}
    </div>
  );
}
