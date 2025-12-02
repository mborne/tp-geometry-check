# Notes de correction

## Généralités

- RAS sur la mise en forme du code
- **La construction ne passe pas** (`import GeometryVisitor` manquant dans [Geometry.ts](https://github.com/zaynabchaiba-byte/tp-geometry-ts/blob/main/src/Geometry.ts))
- **Les tests passent en <u>corrigeant ce problème</u>**
- La couverture par les tests est faible (75%)
- Les tests sont dans dans 2 fichiers avec des tests sur Point doublonné dans [LineString.spec.ts](https://github.com/zaynabchaiba-byte/tp-geometry-ts/blob/ebe839da047e428cf48ee407c257a195e26fd547/test/LineString.spec.ts#L13-L29)
- Non respect de la consigne **un commit par question** avec **2 gros commits** (à 20 minutes d'interval) faisant passer de la question 7 à la question 14...

```
commit ebe839da047e428cf48ee407c257a195e26fd547 (HEAD -> main, origin/main, origin/HEAD)
Date:   Tue Nov 18 00:35:30 2025 +0100
    suite 2

commit f70145167656ef44047eb86182cd1570dd93c80f
Date:   Tue Nov 18 00:14:43 2025 +0100
    tp suite 1

commit 5508b42977643c7e51a2611428a3dcaf8e3fc7f1
Date:   Fri Nov 14 16:58:17 2025 +0100
    question7
```

- [ebe839da047e428cf48ee407c257a195e26fd547](https://github.com/zaynabchaiba-byte/tp-geometry-ts/commit/ebe839da047e428cf48ee407c257a195e26fd547) : +537 -131 lines changed
- [f70145167656ef44047eb86182cd1570dd93c80f](https://github.com/zaynabchaiba-byte/tp-geometry-ts/commit/f70145167656ef44047eb86182cd1570dd93c80f) : +214 -0 lines changed



## Questions

- 0.3 - cas LineString non testé
- 0.9 - cas LineString non testé
- 0.11 - implémentation `getEnvelope()` non remontée sur `AbstractGeometry` + `abstract getEnvelope(): any;` changeant le type + cas LineString non testé
- 0.13 - getType non testé + **GeometryVisitor non complétés.**
- 0.14 - cas GeometryCollection non traité