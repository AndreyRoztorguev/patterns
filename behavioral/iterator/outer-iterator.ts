namespace OuterIterator {
  /** Base interface for all Iterators */
  interface Iterator<Item> {
    first(): Item | null;
    current(): Item | null;
    next(): Item | null;
    isDone(): boolean;
    reset(): void;
  }

  class ArrayCollection<T> {
    private items: T[] = [];

    public getItems(): T[] {
      return this.items;
    }

    public addItem(item: T): void {
      this.items.push(item);
    }
  }

  class ArrayIterator<T> implements Iterator<T> {
    private collection: ArrayCollection<T>;
    private currentIndex: number = 0;

    constructor(collection: ArrayCollection<T>) {
      this.collection = collection;
    }

    first(): T | null {
      if (this.collection.getItems().length === 0) return null;
      this.currentIndex = 0;
      return this.collection.getItems()[this.currentIndex];
    }
    current(): T | null {
      return this.collection.getItems()[this.currentIndex] || null;
    }
    next(): T | null {
      if (this.isDone()) return null;
      const item = this.collection.getItems()[this.currentIndex] || null;
      this.currentIndex++;
      return item;
    }
    isDone(): boolean {
      return this.currentIndex >= this.collection.getItems().length;
    }
    reset(): void {
      this.currentIndex = 0;
    }
  }

  /** Client Code */

  function clientCode() {
    const collection = new ArrayCollection<string>();
    /** in outer iterator we have direct acces to iterator */
    const outerIterator = new ArrayIterator(collection);

    collection.addItem("one");
    collection.addItem("two");
    collection.addItem("tree");

    while (!outerIterator.isDone()) {
      console.log(outerIterator.next());
    }
  }
  clientCode();
}
