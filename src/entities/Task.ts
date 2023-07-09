import Model from '../interfaces/Task';

export default class Task {
  public readonly description: string;
  public readonly seconds: number;

  constructor(data: Model) {
    this.description = data.description;
    this.seconds = data.time;
  }

  get time(): string {
    const timestamp = new Date(this.seconds * 1000);

    return timestamp.toISOString()
      .substr(11, 8);
  }
}