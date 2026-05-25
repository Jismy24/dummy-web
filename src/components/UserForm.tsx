import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
  onSubmit: (data: {
    name: string
    email: string
    password: string
  }) => void
}

export default function UserForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)

    setFormData({
      name: "",
      email: "",
      password: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        name="password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="submit">Create User</Button>
    </form>
  )
}