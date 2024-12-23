namespace ProxyExample {
  interface Subject {
    request(): void;
  }

  class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
      this.realSubject = realSubject;
    }
    /** Added loging before and after*/
    request(): void {
      console.log("before realSubject request");
      this.realSubject.request();
      console.log("after realSubject request");
    }
  }

  class RealSubject implements Subject {
    request(): void {
      console.log("realSubject request logic");
    }
  }

  function clientCode(subject: Subject) {
    subject.request();
  }

  /** using via real object */
  const realSubject = new RealSubject();
  clientCode(realSubject);

  /** using via proxy */
  const proxy = new Proxy(realSubject);
  clientCode(proxy);
}
