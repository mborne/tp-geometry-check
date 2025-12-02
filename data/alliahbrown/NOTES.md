# Notes de correction

## Généralité

- RAS sur les commit
- Formatage du code perfectible (ex dans `WktWriter.ts`)

## Questions

- Q1 : Line**s**tring.ts -> LineString.ts
- Q2 : test superflu sur undefined

```ts
class LineString {
  isEmpty(): boolean {
    return this.points.length === undefined || this.points?.length === 0;
  }
}
```

- Q3 : cas empty non traité dans :

```ts
class Point {
  translate(dx: number, dy: number): void {
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }
}
```

- Q4 : pas de copie en profondeur des tableaux

```ts
class Point {
  clone(): Point {
    return new Point(this.coordinate);
  }
}

class LineString {
  clone(): LineString {
    return new LineString(this.points);
  }    
}
```

- Q05 - cas vide non testé et bizarrement traité

```ts
    it("test empty", () => {
        const builder = new EnveloppeBuilder();
        const result = builder.build();
        expect(result.isEmpty());
        expect(result.toString()).to.equal("EMPTY"); // échec
    });
```

- Q14 - la propriété `totalLength` n'a pas de sens vu qu'on templatise pour l'éviter (une variable locale `totalLength` faisait l'affaire dans visitGeometryCollection)
