/**
 * Abstract product
 */
interface Product {}

/**
 *  Abstract Class with factory method
 */
abstract class Creator {
  // it can have default implementation
  public abstract factoryMethod(): Product;
}

/**
 * Concrete product
 */
class ConcreteProduct1 implements Product {}

/**
 * Concrete creator
 */
class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

/**
 * Concrete product
 */
class ConcreteProduct2 implements Product {}

/**
 * Concrete creator
 */
class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
 * Клиентский код работает с экземпляром конкретного создателя, хотя и через его
 * базовый интерфейс. Пока клиент продолжает работать с создателем через базовый
 * интерфейс, вы можете передать ему любой подкласс создателя.
 */
function clientCode(creator: Creator) {
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.factoryMethod());
}

/**
 * Приложение выбирает тип создателя в зависимости от конфигурации или среды.
 */
console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator1());

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new ConcreteCreator2());
