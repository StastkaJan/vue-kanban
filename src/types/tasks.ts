export type commentsType = Array<{
  user: string
  text: string
}>

export type taskType = {
  id: number
  name: string
  description: string
  dueDate: Date
  comments?: commentsType
}

export type tasksListType = {
  id: number
  name: string
  tasks: Array<taskType>
}

export type movingItemType = {
  listId: number
  itemId: number
}
