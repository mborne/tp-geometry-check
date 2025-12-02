# Notes de correction

## Généralités

- RAS sur les commits
- Quelques imports inutiles (ex : `Point` dans `GeometryCollection`)
- Ne pas hésiter à faire des fichiers différents pour les tests (pour LogGeometryVisitor)


## Questions

- 0.3 - cas vide non traité

```ts
    it("test point translation", () => {
        const p = new Point();
        p.translate(1.0,2.0);
        expect(p.isEmpty()).to.be.true; // KO
    });
```

- 0.4 - `Point.clone()` code complexe et inutilement lié à 2 (mais OK)

- 0.12 - `GeometryWithCachedEnvelope` - changement de prototype pour translate avec un return

```ts
    translate(dx: number, dy: number) {
        const gt = this.original.translate(dx, dy);
        this.cachedEnvelope = undefined;
        return gt
    }
```

- 0.14 - propriété `length` inutile (on cherche à l'éviter avec le return) + algo simplifiable

```ts
    visitLineString(lineString: LineString): number {
        let length = 0.0;
        const numSegments = lineString.getNumPoints() - 1;
        for (let i=0; i<numSegments; i++){
            const start = lineString.getPointN(i-1);
            const end = lineString.getPointN(i-1);
            const dx = end.x() - start.x();
            const dy = end.y() - start.y();
            length += Math.sqrt(dx*dx + dy*dy); // voire Math.hypot
        }
        return length;
    }
```
