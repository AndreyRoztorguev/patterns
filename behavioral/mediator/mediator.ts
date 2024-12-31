namespace Mediator {
  interface Mediator {
    notify(sender: object, event: string): void;
  }

  class ConcreteMediator implements Mediator {
    private Component1: ConcreteComponent1;
    private Component2: ConcreteComponent2;
    private ComponentN: ConcreteComponentN;

    constructor(
      component1: ConcreteComponent1,
      component2: ConcreteComponent2,
      componentN: ConcreteComponentN
    ) {
      this.Component1 = component1;
      this.Component1.setMediator(this);
      this.Component2 = component2;
      this.Component2.setMediator(this);
      this.ComponentN = componentN;
      this.ComponentN.setMediator(this);
    }

    notify(
      sender: Component,
      event:
        | "method1OfConcreteComponent1"
        | "method2OfConcreteComponent1"
        | "method1OfConcreteComponent2"
        | "method2OfConcreteComponent2"
        | "method1OfConcreteComponentN"
        | "method2OfConcreteComponentN"
    ): void {
      switch (event) {
        case "method1OfConcreteComponent1":
          console.log(
            "Mediator reacts on method1OfConcreteComponent1 and triggers following operations:"
          );
          /** can call actions of other components */
          this.Component2.method1OfConcreteComponent2();
          this.ComponentN.method2OfConcreteComponentN();
          break;
        case "method2OfConcreteComponent1": {
          console.log("method2OfConcreteComponent1");
          this.Component1.method2OfConcreteComponent1();
          break;
        }
        case "method1OfConcreteComponent2": {
          console.log("method1OfConcreteComponent2: ");
          break;
        }
        case "method2OfConcreteComponent2": {
          console.log("method2OfConcreteComponent2");
          break;
        }
        case "method1OfConcreteComponentN": {
          console.log("method1OfConcreteComponentN");
          break;
        }
        case "method2OfConcreteComponentN": {
          console.log("method2OfConcreteComponentN");
          break;
        }
        default:
          break;
      }
    }
  }

  class Component {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
      this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
    }
  }

  class ConcreteComponent1 extends Component {
    public method1OfConcreteComponent1(): void {
      this.mediator.notify(this, "method1OfConcreteComponent1");
    }

    public method2OfConcreteComponent1(): void {
      this.mediator.notify(this, "method2OfConcreteComponent1");
    }
  }

  class ConcreteComponent2 extends Component {
    public method1OfConcreteComponent2(): void {
      this.mediator.notify(this, "method1OfConcreteComponent2");
    }

    public method2OfConcreteComponent2(): void {
      this.mediator.notify(this, "method2OfConcreteComponent2");
    }
  }

  class ConcreteComponentN extends Component {
    public method1OfConcreteComponentN(): void {
      this.mediator.notify(this, "method1OfConcreteComponentN");
    }

    public method2OfConcreteComponentN(): void {
      this.mediator.notify(this, "method2OfConcreteComponentN");
    }
  }

  function clientCode() {
    const c1 = new ConcreteComponent1();
    const c2 = new ConcreteComponent2();
    const cN = new ConcreteComponentN();

    const mediator = new ConcreteMediator(c1, c2, cN);

    c1.method1OfConcreteComponent1();
  }
  clientCode();
}
