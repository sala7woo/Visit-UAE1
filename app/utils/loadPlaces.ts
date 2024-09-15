import fs from 'fs'
import path from 'path'

export function loadPlaces() {
  const filePath = path.join(process.cwd(), 'app/data/places.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}