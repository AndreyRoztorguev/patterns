interface ShapeImpl {
  draw(): string;
}

class Circle implements ShapeImpl {
  draw(): string {
    return "Circle";
  }
}

class Rectangle implements ShapeImpl {
  draw(): string {
    return "Rectangle";
  }
}

/**
 *  Abstraction
 */
class Shape {
  protected shape: ShapeImpl;

  constructor(shape: ShapeImpl) {
    this.shape = shape;
  }

  public draw() {
    return this.shape.draw();
  }
}

function clientCode() {
  const circle = new Circle();
  const rectangle = new Rectangle();
  const shape1 = new Shape(circle);
  const shape2 = new Shape(rectangle);

  console.log(shape1.draw()); // 'Circle'
  console.log(shape2.draw()); // 'Rectangle'
}

clientCode();
