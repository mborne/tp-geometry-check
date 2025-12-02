# Notes de correction

## Généralités

- RAS sur les commits
- RAS sur le formatage du code
- Reste quelques `import` inutile (ex : `Envelope` et `EnvelopeBuilder` dans `LineString`)
- RAS sur les tests

## Questions

- 0.2 - gestion des cas `undefined` dans tout le code de `Point` quand il était demandé d'appliqué NonNullObject (comme dans LineString)
- 0.4 - dommage de verrouiller `Point.clone()` sur le cas 2D plutôt que copier le tableau (mais ok, sans impact)
- 0.5 - pas logique de renvoyer une exception sur le cas vide (non testé) en présence du concept d'envelope vide :

```ts
it("test getEnvelope sur point vide", () => {
    const p = new Point();
    // KO Error: Cannot build envelope with no coordinates
    const env = p.getEnvelope(); 
    expect(env.isEmpty()).to.be.true; // plus logique
});
```

- 0.7 - `Point empty` -> `POINT EMPTY`, `Point(3 4)` -> `POINT(3 4)`,... (mais +1 pour utilisation de `join`)

- 0.13 - ok mais il vaut mieux filtrer les parties vides dans le constructeur si on veut les gérer que faire ceci :

```ts
class GeometryCollection {
    isEmpty(): boolean {
        if (this.geometries.length === 0) {
            return true;
        }
        return this.geometries.every(geometry => geometry.isEmpty());
    }
}
```
