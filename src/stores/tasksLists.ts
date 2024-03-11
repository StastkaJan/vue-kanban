import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import type { taskType, tasksListType } from '@/types/tasks'

type movingTaskType = {
  listId: number
  taskId: number
}

export const listsStore = defineStore('lists', () => {
  const storedLists = JSON.parse(localStorage.getItem('tasksLists') || '[]')

  for (const list of storedLists) {
    for (const task of list.tasks) {
      task.dueDate = new Date(task.dueDate)
    }
  }

  const lists = reactive<tasksListType[]>(storedLists)

  const saveList = () => {
    localStorage.setItem('tasksLists', JSON.stringify(lists))
  }

  const getList = (listId: number) => {
    return lists.filter((list) => list.id === listId)[0]
  }

  const listIds = lists?.map((list) => list.id)
  const newListId = ref((Math.max(...listIds) | 0) + 1)

  const addList = () => {
    lists.push({
      id: newListId.value++,
      name: 'New list',
      tasks: []
    })
  }

  const setListName = (listId: number, value: string) => {
    const list = getList(listId)
    if (!list) return

    list.name = value
  }

  const movingTask = reactive<movingTaskType>({
    listId: 0,
    taskId: 0
  })

  const newTaskId = (listId: number) => {
    const list = getList(listId)
    const taskIds = list?.tasks?.map((task) => task.id)
    return (Math.max(...taskIds) | 0) + 1
  }

  const getTask = (listId: number, taskId: number, remove: boolean = false) => {
    const list = getList(listId)
    const task = list.tasks.filter((task, i) => {
      if (task.id !== taskId) return false
      if (remove) list.tasks.splice(i, 1)
      return true
    })

    return task[0]
  }

  const setTask = (listId: number, task: taskType) => {
    const list = getList(listId)
    if (!list) return

    task.id = newTaskId(listId)
    list.tasks.push(task)
  }

  const setTaskName = (listId: number, taskId: number, name: string) => {
    const task = getTask(listId, taskId)
    if (!task) return

    task.name = name
  }

  const addNewTask = (listId: number) => {
    getList(listId).tasks.push({
      id: newTaskId(listId),
      name: 'New task',
      description: '',
      dueDate: new Date()
    })
  }

  return {
    lists,
    saveList,
    getList,
    newListId,
    addList,
    setListName,
    movingTask,
    newTaskId,
    getTask,
    setTask,
    setTaskName,
    addNewTask
  }
})
