import Layout from "@/layout/Layout";
import Task from "@/pages/Task/Task";
import Users from "@/pages/Users/Users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Task,
      },
      {
        path: "/users",
        Component: Users,
      },
      {
        path: "/task",
        Component: Task,
      },
    ],
  },
]);
