import { useState } from "react"
import { Button } from "@/components/ui/button"
import UserSection from "@/sections/UserSection"

function App() {
  const [showUsers, setShowUsers] = useState(false)

  return (
    <div className="min-h-svh flex flex-col items-center justify-center p-6">
      {!showUsers ? (
        <Button onClick={() => setShowUsers(true)}>
          Click me
        </Button>
      ) : (
        <UserSection />
      )}
    </div>
  )
}

export default App