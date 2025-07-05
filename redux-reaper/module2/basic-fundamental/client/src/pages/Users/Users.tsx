import { AddUserModel } from "@/components/Users/AddUserModel"
import UserCard from "@/components/Users/UserCard"
import { useAppSelector } from "@/redux/featuer/hooks"
import { selectUser } from "@/redux/featuer/user/userSlice"


const Users = () => {

  const users = useAppSelector(selectUser)

  return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center">
        <h1 className="mr-auto">Users</h1>
        <AddUserModel />
      </div>

      <div className="space-y-5 mt-7">
        {users.map((user, idx: number) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users