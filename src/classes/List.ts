export default class List<Type> {
  private array: Type[] = [];

  constructor(values?: Type[]) {
    this.array = values ?? [];
  }

  public add(data: Type): Type {
    this.array.push(data);

    return data;
  }

  get isEmpty() {
    return this.array.length <= 0;
  }

  get items() {
    return this.array;
  }
}