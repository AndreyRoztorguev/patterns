abstract class MessageComponent {
  protected parent!: MessageComponent | null;

  public getParent(): MessageComponent | null {
    return this.parent;
  }

  public setParent(parent: MessageComponent | null) {
    this.parent = parent;
  }

  public addItem(component: MessageComponent) {}
  public removeItem(component: MessageComponent) {}
}
/**
 *  Leaf
 */
class TextMessage extends MessageComponent {
  public text!: string;
  constructor(text: string) {
    super();
    this.text = text;
  }
}
/**
 *  Leaf
 */
class ImageMessage extends MessageComponent {
  public src!: string;
  constructor(source: string) {
    super();
    this.src = source;
  }
}
/**
 *  Leaf
 */
class VideoMessage extends MessageComponent {
  public src!: string;
  constructor(source: string) {
    super();
    this.src = source;
  }
}

/**
 *  Composite Component
 */
interface ICompositeMessage {
  children: MessageComponent[];
}

class CompositeMessage extends MessageComponent implements ICompositeMessage {
  children: MessageComponent[] = [];

  public addItem(component: MessageComponent) {
    this.children.push(component);
    component.setParent(this);
  }

  public removeItem(component: MessageComponent) {
    const idx = this.children.indexOf(component);
    this.children.splice(idx, 1);
    component.setParent(null);
  }

  public sort(order: (new (...args: any[]) => MessageComponent)[]): void {
    const orderMap = new Map(order.map((type, index) => [type, index]));

    this.children.sort((a, b) => {
      const aOrder =
        orderMap.get(a.constructor as new (...args: any[]) => MessageComponent) ?? Infinity;
      const bOrder =
        orderMap.get(b.constructor as new (...args: any[]) => MessageComponent) ?? Infinity;
      return aOrder - bOrder;
    });
  }
}

function clientCode() {
  const message1 = new CompositeMessage();
  const Text1Message1 = new TextMessage("My first Message");
  message1.addItem(Text1Message1);
  const Video1Message1 = new VideoMessage("video.mp4");
  message1.addItem(Video1Message1);
  const Video2Message1 = new VideoMessage("vide2.mp4");
  message1.addItem(Video2Message1);
  const Image1Message1 = new ImageMessage("imagesource.avif");
  message1.addItem(Image1Message1);

  console.log(message1.children);
  Text1Message1.text = "Changed"; // you can change text in TextMessage for example
  console.log(message1.children);

  message1.removeItem(Text1Message1); // or remove part of Composite Message
  console.log(message1.children);
  message1.sort([ImageMessage, VideoMessage, TextMessage]); // using order[ImageMessage, VideoMessage, TextMessage]
  console.log(message1.children);
}

clientCode();
