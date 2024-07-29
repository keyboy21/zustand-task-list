import { Trash } from "lucide-react"
import { Checkbox } from "./Checkbox"
import { cn } from "../lib/cn.util"
import { useTaskStore } from "../store/task.store"

interface TaskItemProps {
  task: {
    id: string
    title: string
    completed: boolean
  }
}

export const TaskItem = ({ task }: TaskItemProps) => {

  const deleteTask = useTaskStore((state) => state.deleteTask);
  const createTaskDone = useTaskStore((state) => state.createTaskDone);

  return (
    <li
      className={cn(
        'flex items-center justify-between px-4 py-2 rounded-md',
        task.completed ? 'bg-muted text-muted-foreground line-through' : 'bg-card text-card-foreground'
      )}
    >
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`task-${task.id}`}
          checked={task.completed}
          onCheckedChange={() => createTaskDone(task)}
        />
        <label
          htmlFor={`task-${task.id}`}
          className="font-medium">
          {task.title}
        </label>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-muted-foreground hover:text-destructive focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <Trash className="size-6" />
      </button>
    </li>
  )
}