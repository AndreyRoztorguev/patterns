interface Prototype {
  clone(): Prototype;
}

class ConcretePrototype implements Prototype {
  public field: string;
  public getField(): string {
    return this.field;
  }

  constructor(field: string) {
    this.field = field;
  }
  clone(): ConcretePrototype {
    const clone = Object.create(this);
    clone.field = this.field; // copy value of field
    return clone;
  }
}

const original = new ConcretePrototype("some text");
console.log(original);

const copy = original.clone();
console.log(copy);

console.log("Are they the same object?", original === copy); // false
console.log("Are their fields the same?", original.field === copy.field); // true

// we can expand the original object adding new fields
type ExtendedPrototype = ConcretePrototype & { newField?: string };
const extendedCopy: ExtendedPrototype = copy;
extendedCopy.newField = "New Value";

console.log("Updated Copy:", extendedCopy);
console.log("Original remains unchanged:", original);
