import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const baseApi = createApi({
    reducerPath: "baseAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Task"],
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => "/tasks",
            providesTags: ["Task"]
        }),
        createTask: builder.mutation({
            query: (taskData) => ({
                url: "/tasks",
                method: "POST",
                body: taskData
            }),
            invalidatesTags: ["Task"]
        }),
        updateTask: builder.mutation({
            query: ({id, taskBody}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: taskBody
            }),
            invalidatesTags: ["Task"]
        }),
        removeTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Task"]
        }),
    }),
})



export const { useGetTaskQuery, useCreateTaskMutation, useUpdateTaskMutation, useRemoveTaskMutation } = baseApi