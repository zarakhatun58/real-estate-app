const BASE = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing';

export async function fetchProperties(){
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Failed to fetch properties');
  return res.json();
}
