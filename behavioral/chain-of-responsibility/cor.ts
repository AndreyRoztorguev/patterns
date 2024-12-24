namespace CHainOfResponsibility {
  /**
   * Интерфейс Обработчика объявляет метод построения цепочки обработчиков. Он
   * также объявляет метод для выполнения запроса.
   */
  interface Handler<Request = string, Result = string> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;
    handle(request: Request): Result;
  }

  /**
   * Поведение цепочки по умолчанию может быть реализовано внутри базового класса
   * обработчика.
   */
  abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }

    public handle(request: string): string {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return "";
    }
  }

  class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
      if (request === "Banana") {
        return `Monkey: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
      if (request === "Nut") {
        return `Squirrel: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  class DogHandler extends AbstractHandler {
    public handle(request: string): string {
      if (request === "MeatBall") {
        return `Dog: I'll eat the ${request}.`;
      }
      return super.handle(request);
    }
  }

  function clientCode(handler: Handler) {
    const foods = ["Nut", "Banana", "Cup of coffee"];

    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handle(food);
      if (result) {
        console.log(`  ${result}`);
      } else {
        console.log(`  ${food} was left untouched.`);
      }
    }
  }

  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  /**
   * Клиент должен иметь возможность отправлять запрос любому обработчику, а не
   * только первому в цепочке.
   */
  console.log("Chain: Monkey > Squirrel > Dog\n");
  clientCode(monkey);
  console.log("");

  console.log("Subchain: Squirrel > Dog\n");
  clientCode(squirrel);
}
