interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

// builder A
class ConcreteBuilderA implements Builder {
  private product!: Product1;

  producePartA(): void {
    "special implementation of producePartA for Product1";
  }
  producePartB(): void {
    "special implementation of producePartB for Product1";
  }
  producePartC(): void {
    "special implementation of producePartC for Product1";
  }

  public getProduct(): Product1 {
    return this.product;
  }
}

class Product2 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

// builder B
class ConcreteBuilderB implements Builder {
  private product!: Product2;

  producePartA(): void {
    "special implementation of producePartA for Product2";
  }
  producePartB(): void {
    "special implementation of producePartB for Product2";
  }
  producePartC(): void {
    "special implementation of producePartC for Product2";
  }

  public getProduct(): Product2 {
    return this.product;
  }
}

class Director {
  private builder!: Builder;

  /**
   * Директор работает с любым экземпляром строителя, который передаётся ему
   * клиентским кодом. Таким образом, клиентский код может изменить конечный
   * тип вновь собираемого продукта.
   */
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  /**
   * Директор может строить несколько вариаций продукта, используя одинаковые
   * шаги построения.
   */
  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

/**
 * Клиентский код создаёт объект-строитель, передаёт его директору, а затем
 * инициирует процесс построения. Конечный результат извлекается из объекта-
 * строителя.
 */
function clientCode(director: Director) {
  const builder = new ConcreteBuilderA();
  director.setBuilder(builder);

  console.log("Standard basic product:");
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log("Standard full featured product:");
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  // Помните, что паттерн Строитель можно использовать без класса Директор.
  console.log("Custom product:");
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
