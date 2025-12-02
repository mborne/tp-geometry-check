# notes de correction

## Généralité

- Plusieurs import inutile (ex : `import Envelope from "./Envelope";` dans `Geometry.ts`)

## Questions

- 0.4 - `clone(): Geometry` -> `clone(): Point` possible sur Point (évite un cast)
- 0.10 - asText() non déclarée sur la Geometry
