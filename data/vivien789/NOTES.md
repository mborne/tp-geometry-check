# Notes de correction

## Généralité

- Numéro de question non repris sur les commits (mais ok)
- Plusieurs tests sans contrôles (pour gonfler la couverture?). Ex dans `LineString.spec.ts` :

```ts
    it("should clone point", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([5.0, 6.0]);
        const l = new LineString([a, b]);
        const m = l.clone();
    });

     it("should get enveloppe", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([5.0, 6.0]);
        const l = new LineString([a, b]);
        const m = l.getEnveloppe();
    });
```

## Questions

- 0.3 - cas vide non traité dans `Point` pour translate
- 0.4 - copie en profondeur non traitée sur `Point` et `LineString`

```ts
  clone(): Point {
    const obj = new Point()
    // ceci ne copie pas le tableau (même référence)
    obj.coordinate = this.coordinate
    return obj;
  }
```

- 0.5 - paramètre de constructeur étrange sur `EnveloppeBuilder` + crash sur point vide :

```ts
    it("test EnvelopeBuilder vide", () => {
        const builder = new EnveloppeBuilder();
        // KO : Cannot read properties of undefined (reading '0')
        const env = builder.build();
        expect(env.isEmpty()).to.be.true;
    });

```


- 0.6 - Code étrange dans `Point.ts` :

```ts
  getEnveloppe(): Enveloppe {
    const c = this.coordinate
    // paramètre non existant
    const b = new EnveloppeBuilder(c);
    b.insert(c);
    return b.build();
  }
```

+ comportement point vide non conforme :

```ts
    it("test getEnvelope sur point vide", () => {
        const p = new Point();
        const env = p.getEnveloppe();
        expect(env.isEmpty()).to.be.true; // KO
    });
```


- 0.7 - Manipulation plus qu'étrange sur les coordonnées pour faire passer les tests de `WktWriter` :

```
    const p = `POINT(`;
    const x = geometry.x();
    const y = geometry.y();
    return p + x + `.0 `+ y + `.0)`;
```

Bilan :

```ts
    it("should support support decimal", () => {
        const p = new Point([0.5,1.5]);
        // KO : POINT(0.5.0 1.5.0) suite à cette manipulation!!!
        expect(p.asText()).to.equal("POINT(0.5 1.5)");
    });
```

- 0.9 - "Je suis un point vide." -> "POINT EMPTY" :

```ts
    visitPoint(point: Point) {
        if (point.isEmpty()) {
            // Non finalisé
            this.buffer = `Je suis un point vide.`
            this.log("Je suis un point vide.")
        }
        else {
            const p = `POINT(`;
            const x = point.x();
            const y = point.y();
            // toujours cette horreur (non sanctionnée 2 fois)...
            const resultat = p + x + `.0 ` + y + `.0)`
            this.buffer = resultat;
            this.log(resultat)
        }
    }
```

- 0.10 - implémentation sur les classes filles plutôt qu'au niveau de la classe abstraite

```ts
export default abstract class AbstractGeometry {

    asText(): string {
        return ``
    };
}
```

=>

```ts
export default abstract class AbstractGeometry {
    asText(): string {
        const visitor = new WktVisitor()
        this.accept(visitor)
        return visitor.getResult();
    };
}
```


