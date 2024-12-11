interface CarBuilder {
  produceEngine(): void;
  produceCarBody(): void;
  produceWeel(): void;
  produceDoor(): void;
  produceSeat(): void;
}

class SedanCar {}
class SedanCarBuilder implements CarBuilder {
  private car!: SedanCar;
  produceEngine(): void {
    "do some login special for producing sedan car engine";
  }
  produceCarBody(): void {
    "do some login special for producing sedan car body";
  }
  produceWeel(): void {
    "do some login special for producing sedan car weel";
  }
  produceDoor(): void {
    "do some login special for producing sedan car door";
  }
  produceSeat(): void {
    "do some login special for producing sedan car seat";
  }

  getCar(): SedanCar {
    return this.car;
  }
}

class SUVCar {}
class SUVCarBuilder implements CarBuilder {
  private car!: SUVCar;
  produceEngine(): void {
    "do some login special for producing SUV car engine";
  }
  produceCarBody(): void {
    "do some login special for producing SUV car body";
  }
  produceWeel(): void {
    "do some login special for producing SUV car weel";
  }
  produceDoor(): void {
    "do some login special for producing SUV car door";
  }
  produceSeat(): void {
    "do some login special for producing SUV car seat";
  }

  getCar(): SUVCar {
    return this.car;
  }
}

class SportCar {}
class SportCarBuilder {
  private car!: SportCar;
  produceEngine(): void {
    "do some login special for producing sport car engine";
  }
  produceCarBody(): void {
    "do some login special for producing sport car body";
  }
  produceWeel(): void {
    "do some login special for producing sport car weel";
  }
  produceDoor(): void {
    "do some login special for producing sport car door";
  }
  produceSeat(): void {
    "do some login special for producing sport car seat";
  }

  getCar(): SportCar {
    return this.car;
  }
}

class CarDirector {
  private builder!: CarBuilder;
  public setBuilder(builder: CarBuilder): void {
    this.builder = builder;
  }

  public buildSportCarWithoutDoors(): void {
    this.builder.produceEngine();
    this.builder.produceCarBody();
    // car needs 4 wells
    this.builder.produceWeel();
    this.builder.produceWeel();
    this.builder.produceWeel();
    this.builder.produceWeel();

    this.builder.produceSeat();
  }

  public buildSedanCarWit2Doors(): void {
    this.builder.produceEngine();
    this.builder.produceCarBody();
    // car needs 4 wells
    this.builder.produceWeel();
    this.builder.produceWeel();
    this.builder.produceWeel();
    this.builder.produceWeel();

    this.builder.produceDoor();
    this.builder.produceDoor();

    this.builder.produceSeat();
  }
}

function clientCode(carDirector: CarDirector) {
  const sportCarBuilder = new SportCarBuilder();
  carDirector.setBuilder(sportCarBuilder);

  // client decided create sport car without doors for example
  carDirector.buildSportCarWithoutDoors();

  // get your sport car without doors
  sportCarBuilder.getCar();
}
