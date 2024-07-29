import { useTaskStore } from "../store/task.store"
import { TaskItem } from "./TaskItem"

export const DoneTasks = () => {

     const tasks = useTaskStore((state) => state.doneTasks)

     return (
          <section>
               <h2 className="text-2xl font-bold mb-5">Done Tasks</h2>

               <ul className="space-y-2">
                    {tasks.map((task) => (
                         <TaskItem key={task.id} task={task} />
                    ))}
               </ul>
          </section>
     )
}