import { notFound } from 'next/navigation'
import { loadPlaces } from '../../utils/loadPlaces'

export default function PlacePage({ params }: { params: { id: string } }) {
  const places = loadPlaces()
  const place = places.find((p: any) => p.id === params.id)

  if (!place) {
    notFound()
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{place.name}</h2>
      <img src={place.image} alt={place.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-xl mb-2">{place.city}</p>
      <p className="mb-4">{place.description}</p>
      <h3 className="text-2xl font-semibold mb-2">Location</h3>
      <a href={place.location}>See on Google Maps</a>
    </div>
  )
}