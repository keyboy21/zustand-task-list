import { useShallow } from "zustand/react/shallow"
import { CreateTaskt } from "./components/CreateTask"
import { DoneTasks } from "./components/DoneTasks"
import { TaskList } from "./components/TaskList"
import { useTaskStore } from "./store/task.store"

function App() {

  const [tasks, doneTasks] = useTaskStore(
    useShallow((state) => [state.tasks, state.doneTasks]),
  )
  return (
    <div className="bg-background p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <CreateTaskt />
      <TaskList />
      <DoneTasks />
      <hr
        className="border-t my-6"
      />
      <p
        className="text-sm text-muted-foreground"
      >
        Total Tasks: {tasks.length}
      </p>
      <p
        className="text-sm text-muted-foreground"
      >
        Done Tasks: {doneTasks.length}
      </p>
    </div>
  )
}

export default App
