import Project from "./Project";

export default interface Task {
  id: number,
  time: number;
  description: string;
  project: Project;
}
