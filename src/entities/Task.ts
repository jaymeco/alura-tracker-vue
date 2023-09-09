import Project from '@/interfaces/Project';
import Model from '../interfaces/Task';

export default class Task {
  public readonly description: string;
  public readonly seconds: number;
  public readonly project?: Project;
  public readonly id: number;

  constructor(data: Model) {
    this.description = data.description;
    this.seconds = data.time;
    this.project = data.project;
    this.id = data.id;
  }

  get time(): string {
    const timestamp = new Date(this.seconds * 1000);

    return timestamp.toISOString()
      .substr(11, 8);
  }

  public toJson(): Model {
    return {
      ...this,
      time: this.seconds,
    } as Model;
  }
}