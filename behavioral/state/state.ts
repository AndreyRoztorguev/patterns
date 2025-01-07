namespace State {
  class Context {
    private state!: State;

    constructor(state: State) {
      this.transitionTo(state);
    }

    public transitionTo(state: State) {
      console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
      this.state = state;
      this.state.setContext(this);
    }

    /**
     * Контекст делегирует часть своего поведения текущему объекту Состояния.
     */
    public request1(): void {
      this.state.handle1();
    }

    public request2(): void {
      this.state.handle2();
    }
  }

  abstract class State {
    protected context!: Context;

    public setContext(context: Context) {
      this.context = context;
    }

    public handle1(): void {}
    public handle2(): void {}
  }
  /** ConcreteStateA */
  class ConcreteStateA extends State {
    public handle1(): void {
      console.log("ConcreteStateA handles request1.");
      console.log("ConcreteStateA wants to change the state of the context.");
      this.context.transitionTo(new ConcreteStateB());
    }
    public handle2(): void {}
  }
  /** ConcreteStateA */
  class ConcreteStateB extends State {
    public handle1(): void {
      console.log("ConcreteStateB handles request1.");
    }
    public handle2(): void {
      console.log("ConcreteStateB handles request2.");
      console.log("ConcreteStateB wants to change the state of the context.");
      this.context.transitionTo(new ConcreteStateA());
    }
  }

  function clientCode() {
    const context = new Context(new ConcreteStateA());
    context.request1();
    context.request2();
  }
  clientCode();
}
