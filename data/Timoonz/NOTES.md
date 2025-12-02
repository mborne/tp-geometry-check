# Notes de correction

## Généralité

- RAS sur les commits
- Attention au formatage du code (trop d'indentation ou mauvais indentation par endroit)
- Quelques `import` inutiles (ex `Envelope` dans `GeometryCollection.ts`)
- Au moins un test ne vérifiant rien. Dans `Envelope.spec.ts` :

```ts
    it("test envelope constructor with a Point", () => {
        const p = new Point([0.0,1.0]);
        const result = p.getEnvelope();
    });
```

## Questions

- 0.3 - cas vide mal non traité dans `translate` sur `Point`
- 0.4 - le clonage d'un point vide donne un `Point` étrange avec `[NaN,NaN]` (non vide) :

```ts
    it("should clone empty point as empty point", () => {
        const p = new Point();
        const copy = p.clone();
        expect(copy.isEmpty()).to.be.true; // KO
    });
```
  
- 0.5 - ok mais serait effectivement un peu mieux comme suit :

```ts
class EnvelopeBuilder {
    // ...

    public build(): Envelope {
        // on exclue dès que possible le(s) cas particulier(s)
        if ( this.xmin == Infinity ){
            return new Envelope();
        }
        // on traite ensuite le cas nominal
        const bottomLeft = [this.xmin, this.ymin];
        const topRight = [this.xmax, this.ymax];
        return new Envelope(bottomLeft, topRight);
    }
}
```

- 0.12 - exceptionnellement, il était acceptable d'avoir un null pour `cachedEnvelope` (mais ok)

- 0.13 - utiliser `geom.asText()` dans `WktVisitor.visitGeometryCollection` est aussi astucieux que dangereux (dépendance croisée)

- 0.14 - type de retour `T` non déclaré sur les méthodes de `GeometryVisitor<T>`
