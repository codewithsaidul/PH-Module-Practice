import { Types } from "mongoose"

export interface INotes {
    title: string,
    content: string,
    category: "personal" | "work" | "study" | "other",
    tags: {
        label: string,
        color: string
    },
    userId: Types.ObjectId
}