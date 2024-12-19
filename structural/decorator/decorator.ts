(() => {
  interface IComponent {
    exec(): void;
  }

  /**
   *  Base Component
   */
  class Component implements IComponent {
    exec(): void {
      console.log("Component exec");
    }
  }

  /**
   *  Base Decorator
   */
  class ComponentDecorator implements IComponent {
    protected component!: IComponent;

    constructor(component: Component) {
      this.component = component;
    }

    exec(): void {
      /**
       * do some logic specific for this decorator (console.log for example)
       * then exec base component exec function;
       *  */
      console.log("ComponentDecorator");
      this.component.exec();
    }
  }

  /**
   *  Concrete Decorator One
   */
  class ConcreteDecoratorOne extends ComponentDecorator {
    /**
     * Декораторы могут вызывать родительскую реализацию операции, вместо того,
     * чтобы вызвать обёрнутый объект напрямую. Такой подход упрощает расширение
     * классов декораторов.
     */
    exec(): void {
      console.log("This is ConcreteDecoratorOne");
      return super.exec();
    }
  }

  class ConcreteDecoratorTwo extends ComponentDecorator {
    exec(): void {
      console.log("This is ConcreteDecoratorOne Before");
      super.exec();
      console.log("This is ConcreteDecoratorOne After");
    }
  }

  function clientCode() {
    const component = new Component();
    component.exec();

    const componentWithDecoratorOne = new ConcreteDecoratorOne(component);
    componentWithDecoratorOne.exec();

    const componentWithDecoratorOneTwo = new ConcreteDecoratorTwo(componentWithDecoratorOne); // there can be any nesting
    componentWithDecoratorOneTwo.exec();
  }

  clientCode();
})();
