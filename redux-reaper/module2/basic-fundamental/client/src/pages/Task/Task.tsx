import { AddTaskModel } from "@/components/Task/AddTaskModel";
import TaskCard from "@/components/Task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/featuer/hooks";
import { updateFilter } from "@/redux/featuer/task/taskSlice";
import type { TaskInterface } from "@/types/index.types";

const Task = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetTaskQuery(undefined);

  if (isLoading && !isError) return "Loading....";

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList className="mr-5 px-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Meduim"))}
              value="Meduim"
            >
              Meduim
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModel />
      </div>

      {data.tasks.length > 0 ? (
        <div className="space-y-5 mt-7">
          {data.tasks.map((task: TaskInterface, idx: number) => (
            <TaskCard key={idx} task={task} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-3xl text-center mt-60">No task found!</p>
        </div>
      )}
    </div>
  );
};

export default Task;
