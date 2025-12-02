# Notes de correction

## Généralités

- RAS sur les commits
- Ne pas laisser des `console.log` dans les tests (non sanctionné)
- Attention au formatage du code (quelques problème d'indentation, par exemple dans `Point.getType`)
- Quelques faux tests sans contrôle. Ex `LineString.spec.ts` :

```ts
    it("test translate list empty", () => {

        const l = new LineString();
        l.translate(1, 2);
        l.isEmpty();

    })
```

- Quelques problèmes d'indentation dans LineString

## Questions

- 0.2 - logique trop compliquée dans les constructeurs `Point` et `LineString`
- 0.3 - cas vide bien traité sur `Point` mais inutilement sur `LineString` (non sanctionné)
- 0.4 - logique inutilement compliquée pour traiter les cas vide (non sanctionné)
- 0.5 - test un peu léger mais ok.
- 0.6 - ok mais logique inutile sur cas vide dans `LineString.getEnvelope` + éviter les variables inutiles :

```ts
  getEnvelope(): Envelope {
    const envb= new EnvelopeBuilder()
    envb.insert(this.getCoordinate())
    const env = envb.build()
    return env
  }
```

=>

```ts
  getEnvelope(): Envelope {
    const envb= new EnvelopeBuilder();
    envb.insert(this.getCoordinate());
    return envb.build();
  }
```

- 0.7 - cas empty mal traité (`POINT EMPTY` et `LINESTRING EMPTY` attendus)
- 0.8 - l'utilisation de return n'était pas permise (c'est une limite du visiteur de base et la raison d'être de la question 0.14)
- 0.9 - `console.log` de debug dans `WktVisitor`
- 