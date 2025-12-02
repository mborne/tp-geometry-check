# Notes de correction

## Généralité

- RAS sur commit
- Code étrange dans les tests

> https://github.com/M4LIiZ/tp-geometry-ts/blob/e54d55f5e978f75b61a60c4e5987ebdac74ec26b/test/LineSTring.spec.ts#L13-L16

## Questions

- 0.5 - pas logique de gérer les min/max dans `build()`. Quitte à gérer xMin, yMin, xMax et yMax; il faut les gérer dans `insert` + **cas vide mal traité**
- 0.6 - c.f. ci-dessus :

```ts
    it("test getEnvelope empty", () => {
        const p = new Point();
        expect(p.getEnveloppe().isEmpty()).to.equal(true); // KO
    });
```

- 0.7 - mauvais formatage

> `POINT(3,4)` => `POINT(3 4)` `LINESTRING(3,4,0,0)` => `LINESTRING(3 4,0 0)`

- 0.9 - idem (mauvais formatage, non sanctionné une deuxième fois)

