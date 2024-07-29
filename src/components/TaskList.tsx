import { useTaskStore } from "../store/task.store"
import { TaskItem } from "./TaskItem"

export const TaskList = () => {

     const tasks = useTaskStore((state) => state.tasks)

     return (
          <ul className="space-y-2">
               {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
               ))}
          </ul>
     )
}