# Notes de correction

## Généralités

- RAS sur les commits
- Ne pas hésiter à faire des fichiers dédiés aux classes pour les tests
- RAS sur le formatage du code

## Questions

- 0.3 - cas vide non traité dans `Point`
- 0.4 - `Point.clone()` : logique inutile sur empty et blocage un peu dommage sur 2D  / `LineString.clone()` : idem logique inutile sur empty (non scanctionné)
- 0.5 - ça n'a pas trop de sens de faire la logique min/max dans `getResult()`...
- 0.8 - test simplifié par traitement 14 en avance (mais ok)
- 0.9 - idem, pas besoin de buffer (mais ok)
- 0.11 - implémentation `getEnvelope()` non remontée dans `AbstractGeometry`
- 0.13 - KO : pas de mise en cache dans `GeometryWithCachedEnvelope`
