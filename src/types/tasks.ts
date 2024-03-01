export type comments = Array<{
  user: string
  text: string
}>

export type task = {
  id: number
  name: string
  description: string
  dueDate: Date
  comments: comments
}

export type tasksLists = Array<{
  name: string
  tasks: Array<task>
}>
