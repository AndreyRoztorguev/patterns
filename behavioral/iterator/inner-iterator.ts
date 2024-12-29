namespace InnerIterator {
  class ArrayCollection<T> {
    private items: T[] = [];

    public getItems(): T[] {
      return this.items;
    }

    public addItem(item: T): void {
      this.items.push(item);
    }
    /** This is inner iterator */
    public forEach(callback: (item: T, index: number, array: T[]) => void): void {
      for (let i = 0; i < this.items.length; i++) {
        callback(this.items[i], i, this.items);
      }
    }
  }

  function clientCode() {
    const collection = new ArrayCollection<string>();
    collection.addItem("one");
    collection.addItem("two");
    collection.addItem("three");

    // Using the inner iterator
    collection.forEach((item, index) => {
      console.log(`Index: ${index}, Item: ${item}`);
    });
  }
  clientCode();
}
