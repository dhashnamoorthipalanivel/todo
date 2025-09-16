export interface Todo {
  id: string;
  task: string;
  priority: "Low" | "Medium" | "High";
  description: string;
  progress: "Pending" | "In progress" | "Completed";
  date: string;
}
