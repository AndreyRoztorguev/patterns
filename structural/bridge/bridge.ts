interface Implementation {
  operationImplementation(): string;
}

// Concrete Implementation A
class ConcreteImplementationA implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationA";
  }
}

// Concrete Implementation B
class ConcreteImplementationB implements Implementation {
  operationImplementation(): string {
    return "ConcreteImplementationB";
  }
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

function clientCode() {
  const implementation = new ConcreteImplementationA();
  const abstraction = new Abstraction(implementation);

  abstraction.operation();
}

clientCode();
