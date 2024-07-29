import { useState } from "react"
import { useTaskStore } from "../store/task.store"

export const CreateTaskt = () => {
     const [newTask, setNewTask] = useState("")

     const createTask = useTaskStore((state) => state.createTask)

     const handleNewTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
          setNewTask(e.target.value)
     }

     const handleNewTaskSubmit = () => {
          if (!newTask.trim()) return
          createTask(newTask)
          setNewTask("")
     }

     return (
          <div className="mb-4 flex flex-col">
               <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={handleNewTaskInput}
                    className="border-2 border-input rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
               />

               <button
                    onClick={handleNewTaskSubmit}
                    className="bg-primary text-primary-foreground rounded-md px-4 py-2 mt-2 hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring"
               >
                    Add Task
               </button>
          </div>
     )
}