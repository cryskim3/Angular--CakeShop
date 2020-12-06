export class Product {
  public id: number;
  public name: string;
  public price: number;
  public description: string;
  public imagePath: string;
  public detail: string;


  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    detail: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imagePath = image;
    this.detail = detail;
  }
}
