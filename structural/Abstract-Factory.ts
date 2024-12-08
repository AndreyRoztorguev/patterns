// abstrac products
interface Chair {
  // it can have any number of fields and methods.
  chairField1: string;
  chairField2: boolean;
  chairMethod: () => string;
}
interface Table {
  // it can have any number of fields and methods.
  tableField1: string;
  tableField2: boolean;
  tableMethod: () => string;
}
interface Sofa {
  // it can have any number of fields and methods.
  sofaField1: string;
  sofaField2: boolean;
  sofaMethod: () => string;
}

// AbstractFactory
interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
  createSofa(): Sofa;
}

// concrete factory 1
class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return {} as Chair;
  }
  createSofa(): Sofa {
    return {} as Sofa;
  }
  createTable(): Table {
    return {} as Table;
  }
}

// concrete factory 2
class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return {} as Chair;
  }
  createSofa(): Sofa {
    return {} as Sofa;
  }
  createTable(): Table {
    return {} as Table;
  }
}

// client code doesn't know about what exactly factory should be used
function clientCode(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();
  const sofa = factory.createSofa();

  // use whatever you want
  console.log(chair.chairMethod());
  console.log(table.tableField1);
  console.log(sofa.sofaField2);
}

// applying exact factory on runtime
clientCode(new ModernFurnitureFactory()); // Modern specific factory
clientCode(new VictorianFurnitureFactory()); // Victorian specific factory

// you can add another factory as many as you want
