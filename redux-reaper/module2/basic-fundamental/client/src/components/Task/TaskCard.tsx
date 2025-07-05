import { cn } from "@/lib/utils";
import { useRemoveTaskMutation, useUpdateTaskMutation } from "@/redux/api/baseApi";
import type { TaskInterface } from "@/types/index.types";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface TaskProps {
  task: TaskInterface;
}

const TaskCard = ({ task }: TaskProps) => {
  const [removeTask] = useRemoveTaskMutation();
  const [updateTask] = useUpdateTaskMutation()


  const taskUpdate = (task: TaskInterface) => {
    const taskBody = {
      ...task,
      isCompleted: !task.isCompleted
    }
    updateTask({
      id: task._id,
      taskBody
    })
  }


  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Meduim",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1
            className={cn("text-2xl font-semibold", {
              "line-through": task.isCompleted,
            })}
          >
            {task.title}
          </h1>
        </div>

        <div className="flex gap-2 items-center">
          <Button
            onClick={() => removeTask(task._id)}
            variant="link"
            className="p-0 text-red-500 cursor-pointer"
          >
            <Trash2 />
          </Button>
          <Checkbox onClick={() => taskUpdate(task)} />
        </div>
      </div>
      <p className="mt-5">
        Assigned User: {task.assignToUser ? task.assignToUser : "not assign"}
      </p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
