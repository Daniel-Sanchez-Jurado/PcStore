export class Article {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
    category: string;
  
    constructor(id: number, image: string, name: string, price: number, description: string, category: string) {
      this.id = id;
      this.image = image;
      this.name = name;
      this.price = price;
      this.description = description;
      this.category = category;
    }
  }
  