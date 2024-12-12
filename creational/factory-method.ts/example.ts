/**
 * Abstract Logistic Service (Product)
 */
interface LogisticService {
  deliver(): void;
}

/**
 *  Abstract Logistic Factory Service (Creator)
 */
abstract class LogisticFactory {
  public abstract createService(): LogisticService;
}

/**
 * Concrete Logistic Service 1  (Product)
 */
class CarLogisticService implements LogisticService {
  public deliver(): void {
    console.log("Car logistic service");
  }
}

/**
 * Concrete Logistic Service 2  (Product)
 */
class AirLogisticService implements LogisticService {
  public deliver(): void {
    console.log("Car logistic service");
  }
}

/**
 *  Concrete Logistic Service 3 (Product)
 */
class SeaLogisticService implements LogisticService {
  deliver(): void {}
}

/**
 * Concrete Logistic Factory Service 1 (Creator)
 */
class CarLogisticFactory extends LogisticFactory {
  public createService(): LogisticService {
    return new CarLogisticService();
  }
}

/**
 * Concrete Logistic Factory Service 2 (Creator)
 */
class AirLogisticFactory extends LogisticFactory {
  public createService(): LogisticService {
    return new AirLogisticService();
  }
}

/**
 * Concrete Logistic Factory Service 3 (Creator)
 */
class SeaLogisticFactory extends LogisticFactory {
  public createService(): LogisticService {
    return new SeaLogisticService();
  }
}

function clientCode(creator: LogisticFactory) {
  console.log(creator.createService());
}

// for Car logistic
clientCode(new CarLogisticFactory());

// for Air logistic
clientCode(new AirLogisticFactory());

// for Sea logistic
clientCode(new SeaLogisticFactory());
