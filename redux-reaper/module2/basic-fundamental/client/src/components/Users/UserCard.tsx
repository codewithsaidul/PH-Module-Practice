import { Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useAppDispatch } from "@/redux/featuer/hooks"
import { deleteUser } from "@/redux/featuer/user/userSlice"
import type { IUser } from "@/types/index.types"


interface UserProps {
  user: IUser;
}


const UserCard = ( { user }: UserProps ) => {

    const dispatch = useAppDispatch()

  return (
    <div className="border px-5 py-3 rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h1
                className={cn("text-2xl font-semibold")}
              >
                {user.name}
              </h1>
            </div>
    
            <div className="flex gap-2 items-center">
              <Button
                onClick={() => dispatch(deleteUser(user.id))}
                variant="link"
                className="p-0 text-red-500"
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        </div>
  )
}

export default UserCard