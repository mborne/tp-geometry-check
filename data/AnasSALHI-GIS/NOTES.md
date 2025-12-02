
# Notes de corrections

## Généralité

- RAS sur les commits
- Quelques imports inutiles (ex `Point` dans `Geometry`)
- Attention au nommage `wktVisitor` -> `WktVisitor` (première lettre en majuscule pour les types)
- **Problème avec 2 tests** :

```
  1) test wktVisitor 
       test visitGeometryCollection autre collection:

      AssertionError: expected '' to equal 'GEOMETRYCOLLECTION(POINT(1 2),LINESTR…'
      + expected - actual

      +GEOMETRYCOLLECTION(POINT(1 2),LINESTRING(0 0,1 1))
      
      at Context.<anonymous> (test/wktVisitor.spec.ts:65:40)
      at process.processImmediate (node:internal/timers:491:21)

  2) test wktVisitor 
       test wktVisitor :

      AssertionError: expected 'Couple vide' to equal 'POINT EMPTY'
      + expected - actual

      -Couple vide
      +POINT EMPTY
      
      at Context.<anonymous> (test/wktVisitor.spec.ts:71:40)
      at process.processImmediate (node:internal/timers:491:21)
```

https://mborne.github.io/tp-geometry-check/data/AnasSALHI-GIS/tp-geometry-ts.build-test.txt

## Questions

- 0.8 - LogGeometryVisitor utilise un return non déclaré / demandé (avant dernière question)

- 0.9 - WktVisitor : "Couple vide" pour point vide (source échec d'un test :s)

- 0.10 - asText non déclarée sur Geometry

- 0.11 - getEnvelope non remontée sur AbstractGeometry

- 0.12 - cache non invalidé + `EnvelopeBuilder` inutile dans `GeometryWithCachedEnvelope`

- 0.13 - GeometryCollection - WktVisitor
  - Implémentation partielle de visitGeometryCollection dans WktVisitor
  - Plusieurs tests avec le même WktVisitor -> poserait problème pour l'implémentation

```ts
let visitor = new wktVisitor();
new Point().accept(visitor);
expect(visitor.getResult()).to.equal("POINT EMPTY"); //Couple vide

visitor = new wktVisitor();
new Point([3, 4]).accept(visitor);
expect(visitor.getResult()).to.equal("POINT(3 4)");
```