import Link from 'next/link'
import { loadPlaces } from './utils/loadPlaces'

export default function Home() {
  const places = loadPlaces()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Places to Visit in the UAE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.map((place: any) => (
          <Link href={`/place/${place.id}`} key={place.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600">{place.city}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}