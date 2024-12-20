class Facade {
  protected subsystem1: SubSystem1;
  protected subsystem2: SubSystem2;
  protected subsystem3: SubSystem3;

  constructor(subsystem1?: SubSystem1, subsystem2?: SubSystem2, subsystem3?: SubSystem3) {
    this.subsystem1 = subsystem1 || new SubSystem1();
    this.subsystem2 = subsystem2 || new SubSystem2();
    this.subsystem3 = subsystem3 || new SubSystem3();
  }

  /**
   * Методы Фасада удобны для быстрого доступа к сложной функциональности
   * подсистем. Однако клиенты получают только часть возможностей подсистемы.
   */
  public operation(): string {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += this.subsystem3.operation1();
    result += "Facade orders subsystems to perform the action:\n";
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();
    result += this.subsystem3.operationX();
    return result;
  }
}

class SubSystem1 {
  // ... can have any functionality
  public operation1(): string {
    return "Subsystem1: Ready!\n";
  }
  public operationN(): string {
    return "Subsystem1: Go!\n";
  }
}

class SubSystem2 {
  // ... can have any functionality
  public operation1(): string {
    return "Subsystem2: Ready!\n";
  }
  public operationZ(): string {
    return "Subsystem2: Go!\n";
  }
}

class SubSystem3 {
  // ... can have any functionality
  public operation1(): string {
    return "Subsystem3: Ready!\n";
  }
  public operationX(): string {
    return "Subsystem3: Go!\n";
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

const subsystem1 = new SubSystem1();
const subsystem2 = new SubSystem2();
const subsystem3 = new SubSystem3();

const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);
