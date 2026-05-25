import { useEffect, useState } from "react"
import UserForm from "../components/UserForm"
import { createUser, getAllUsers } from "@/services/userService"
import type{ User } from "@/types/user"

export default function UserSection() {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers()
      setUsers(data)
    } catch (error) {
      console.error("Error fetching users", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleCreateUser = async (user: User) => {
    try {
      await createUser(user)
      fetchUsers()
    } catch (error) {
      console.error("Error creating user", error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">User Management</h1>

      <UserForm onSubmit={handleCreateUser} />

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}