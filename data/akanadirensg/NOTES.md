# Notes de correction

## Généralité

- RAS sur commits
- RAS sur formatage du code
- Éviter de mixer CamelCase et underscore

```ts
const copy_points: Point[] = [];
// ->
const copyPoints: Point[] = [];
```

## Questions

- Q0.3 - test vide inutile dans LineString :

```ts
  translate(dx: number, dy: number): void {
    if (!this.isEmpty()) {
      for (let point of this.points) {
        point.translate(dx, dy)
      }
    }
  }
```

