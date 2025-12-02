# Notes de correction

## Généralité

- RAS sur les commits
- RAS sur le formatage du code à part qu'un peu d'air entre les tests serait pas mal
- 


## Questions

- 0.3 - cas vide non traité sur `Point` :

```ts
    it("should not translate empty point", () => {
        const p = new Point();
        p.translate(3,4);
        expect(p.isEmpty()).to.be.true; // KO
    });
```

- 0.5 - le clonage d'un point vide donne un `Point` étrange avec `[NaN,NaN]` (non vide) :

```ts
    it("should clone empty point as empty point", () => {
        const p = new Point();
        const copy = p.clone();
        expect(copy.isEmpty()).to.be.true; // KO
    });
```

- 0.7 - bloquer sur une seule décimale est délicat... (mais ok)


- 0.12 - exceptionnellement, il était acceptable d'avoir un null pour `cachedEnvelope` (mais ok)


- 0.14 - type de retour `T` non déclaré sur les méthodes de `GeometryVisitor<T>`
- 0.14 - coquille `LenghtVisitor.ts` -> `LengthVisitor.ts` + nombre de point renvoyé dans `visitLineString` (plutôt que somme des longueurs des segments) + logique compliquée dans `visitGeometryCollection`. Il était possible d'utiliser `accept` :

```ts
visitGeometryCollection(geometrycollection: GeometryCollection): number {
    let length = 0.0;
    let n = geometrycollection.getNumGeometries();
    for (let i=0; i<n; i++) {
        const part = geometrycollection.getGeometryN(i);
        length += part.accept(this); 
    }
    return length;
}
```

