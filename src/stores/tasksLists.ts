import { reactive } from 'vue'
import { defineStore } from 'pinia'

import type { taskType, tasksListType, movingItemType } from '@/types/tasks'

export const listsStore = defineStore('lists', () => {
  const lists = reactive<tasksListType[]>([
    {
      id: 1,
      name: 'Task list 1',
      tasks: [
        {
          id: 1_1,
          name: 'Wash dishes',
          description: 'Lorem impsum dolor sit amet',
          dueDate: new Date(2024, 3, 10, 12, 15),
          comments: []
        }
      ]
    },
    {
      id: 2,
      name: 'Task list 2',
      tasks: [
        {
          id: 2_1,
          name: 'Wash dishes',
          description: 'Lorem impsum dolor sit amet',
          dueDate: new Date(2024, 3, 10, 12, 15),
          comments: []
        }
      ]
    },
    {
      id: 3,
      name: 'Task list 3',
      tasks: [
        {
          id: 3_1,
          name: 'Wash dishes',
          description: 'Lorem impsum dolor sit amet',
          dueDate: new Date(2024, 3, 10, 12, 15),
          comments: []
        }
      ]
    },
    {
      id: 4,
      name: 'Task list 4',
      tasks: [
        {
          id: 4_1,
          name: 'Wash dishes',
          description: 'Lorem impsum dolor sit amet',
          dueDate: new Date(2024, 3, 10, 12, 15),
          comments: []
        },
        {
          id: 4_2,
          name: 'Wash dishes',
          description: 'Lorem impsum dolor sit amet',
          dueDate: new Date(2024, 3, 10, 12, 15),
          comments: []
        }
      ]
    }
  ])

  const movingItem = reactive<movingItemType>({
    listId: 0,
    itemId: 0
  })

  const getList = (listId: number) => {
    return lists.filter((list) => list.id === listId)[0]
  }

  const getItem = (listId: number, itemId: number, remove: boolean = false) => {
    const list = getList(listId)
    const item = list.tasks.filter((item, i) => {
      if (item.id !== itemId) return false
      if (remove) list.tasks.splice(i, 1)
      return true
    })

    return item[0]
  }

  const setItem = (listId: number, item: taskType) => {
    const list = getList(listId)
    if (!list) return

    list.tasks.push(item)
  }

  const dragItem = (event: DragEvent, listId: number, itemId: number) => {
    if (!event || !event.dataTransfer) return false

    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    movingItem.listId = listId
    movingItem.itemId = itemId

    return true
  }

  const dropItem = (listIdTo: number) => {
    const { listId, itemId } = movingItem
    const item = getItem(listId, itemId, true)
    setItem(listIdTo, item)

    return true
  }

  return { lists, movingItem, getList, getItem, setItem, dragItem, dropItem }
})
