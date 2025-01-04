namespace Observer {
  interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }

  class ConcreteSubject implements Subject {
    /**
     * @type {number} Для удобства в этой переменной хранится состояние
     * Издателя, необходимое всем подписчикам.
     */
    public state: number = 0;

    private observers: Observer[] = [];

    attach(observer: Observer): void {
      const isAlreadySubscribed = this.observers.includes(observer);
      if (isAlreadySubscribed) {
        return console.log("Subject: Observer has been attached already.");
      }
      console.log("Subject: Attached an observer.");
      this.observers.push(observer);
    }

    detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);

      if (observerIndex === -1) {
        return console.log("Subject: Nonexistent observer.");
      }

      this.observers.splice(observerIndex, 1);
      console.log("Subject: Detached an observer.");
    }

    notify(): void {
      console.log("Subject: Notifying observers...");
      for (const observer of this.observers) {
        observer.update(this);
      }
    }

    public someBusinessLogic(): void {
      console.log("\nSubject: I'm doing something important.");
      this.state = Math.floor(Math.random() * (10 + 1));

      console.log(`Subject: My state has just changed to: ${this.state}`);
      this.notify();
    }
  }

  interface Observer {
    update(subject: Subject): void;
  }

  class ConcreteObserverA implements Observer {
    update(subject: Subject): void {
      if (subject instanceof ConcreteSubject && subject.state < 3) {
        console.log("ConcreteObserverA: Reacted to the event.");
      }
    }
  }
  class ConcreteObserverB implements Observer {
    update(subject: Subject): void {
      if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
        console.log("ConcreteObserverB: Reacted to the event.");
      }
    }
  }

  function clientCode() {
    const subject = new ConcreteSubject();

    const observerA = new ConcreteObserverA();
    const observerB = new ConcreteObserverB();

    subject.attach(observerA);
    subject.attach(observerB);

    subject.someBusinessLogic();
    subject.someBusinessLogic();

    subject.detach(observerB);
    subject.someBusinessLogic();
  }
  clientCode();
}
