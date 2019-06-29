export class Recipe {
  public name: string;
  public discription: string;
  public imageUrl: string;
  constructor(name: string, dis: string, url: string) {
    this.name=name;
    this.discription=dis;
    this.imageUrl=url;
  }
}
