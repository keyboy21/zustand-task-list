import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TaskState {
     tasks: Task[];
     doneTasks: Task[];
     createTask: (taskTitle: string) => void;
     deleteTask: (id: string) => void;
     editTask: (id: string, newTitle: string) => void;
     createTaskDone: (task: Task) => void;
}

interface Task {
     id: string
     title: string
     completed: boolean
}

export const useTaskStore = create<TaskState>()(
     persist(
          (set, get) => ({
               tasks: [],
               doneTasks: [],
               createTask: (taskTitle) => {
                    const { tasks } = get();

                    const newTask = {
                         id: crypto.randomUUID(),
                         title: taskTitle,
                         completed: false
                    }

                    set({ tasks: [...tasks, newTask] })
               },

               deleteTask: (id) => {
                    const { tasks, doneTasks } = get();

                    set({
                         tasks: tasks.filter((task) => task.id !== id),
                         doneTasks: doneTasks.filter((task) => task.id !== id)
                    })
               },
               editTask: (id, newTitle) => set((state) => ({
                    tasks: state.tasks.map((task) => task.id === id ? { ...task, title: newTitle } : task)
               })),
               createTaskDone: (task) => {

                    const { doneTasks, tasks } = get();

                    const doneTaskExists = doneTasks.find((t) => t.id === task.id) !== undefined

                    if (doneTaskExists) {
                         set({
                              doneTasks: doneTasks.filter((t) => t.id !== task.id),
                              tasks: [...tasks, { ...task, completed: false }]
                         })
                    }

                    else {
                         set({
                              doneTasks: [...doneTasks,
                              { ...task, id: crypto.randomUUID(), completed: true }
                              ],
                              tasks: tasks.filter((t) => t.id !== task.id)
                         })
                    }

               }
          }),
          {
               name: 'tasks',
          }
     )
)