namespace Command {
  /** Basic Command Interface */
  interface Command {
    execute(): void;
  }

  /** Concrete Command */
  class SimpleCommand implements Command {
    private payload: string;
    constructor(payload: string) {
      this.payload = payload;
    }
    execute(): void {
      console.log(`Simple command executed with ${this.payload}`);
    }
  }

  /** Concrete Command */
  class ComplexCommand implements Command {
    private receiver: Receiver;
    private a: string;
    private b: string;

    constructor(recever: Receiver, a: string, b: string) {
      this.receiver = recever;
      this.a = a;
      this.b = b;
    }
    execute(): void {
      console.log("Complex command executed");
      this.receiver.onComplexCommand(this.a, this.b);
    }
  }

  class Invoker {
    private commands: Command[] = [];
    public addCommand(command: Command): void {
      this.commands.push(command);
    }

    public invoke() {
      for (const command of this.commands) {
        command.execute();
      }
      this.commands = [];
    }
  }

  /** Business layer */
  class Receiver {
    public onSimpleCommand(payload: string): void {
      console.log(`Receiver received ${payload}`);
    }
    public onComplexCommand(a: string, b: string): void {
      console.log(`Receiver received ${a} and ${b}`);
    }
  }

  /** UI layer can */
  function clientCode() {
    const invoker = new Invoker();
    const receiver = new Receiver();
    const simpleCommand = new SimpleCommand("example string");
    const complexCommand = new ComplexCommand(receiver, "argA", "argB");

    invoker.addCommand(simpleCommand);
    invoker.invoke();

    invoker.addCommand(complexCommand);
    invoker.invoke();
  }
  clientCode();
}
