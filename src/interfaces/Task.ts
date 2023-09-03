import Project from "./Project";

export default interface Task {
  time: number;
  description: string;
  project: Project;
}
