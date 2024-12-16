interface ITarget {
  getData(): string;
}
/**
 * Local App Class (Target)
 */
class Target implements ITarget {
  public getData() {
    return "Target: The default target's behavior.";
  }
}

/**
 *  Third-Party Service (Can be a lib)
 */
interface IAdaptee {
  specificRequest(): number;
}

class Adaptee implements IAdaptee {
  public specificRequest() {
    return 1;
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public getData(): string {
    /**
     * transform data(number) from lib to string type to satisfy Target getData type
     */
    const result = this.adaptee.specificRequest().toString();
    return result;
  }
}

const adapter = new Adapter(new Adaptee());
/**
 *  We use like a native target interface but actually it use a third-party service
 */
adapter.getData();
