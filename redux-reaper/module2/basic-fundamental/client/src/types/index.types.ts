export interface TaskInterface {
  _id: string
  title: string
  description: string
  dueDate: string
  isCompleted: boolean
  priority: "High" | "Meduim" | "Low"
  assignToUser: string | null
}


export interface IUser {
  id: string;
  name: string;
}