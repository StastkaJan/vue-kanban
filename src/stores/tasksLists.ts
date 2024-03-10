import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import type { taskType, tasksListType } from '@/types/tasks'

type movingItemType = {
  listId: number
  itemId: number
}

export const listsStore = defineStore('lists', () => {
  const storedList = JSON.parse(localStorage.getItem('tasksLists') || '[]')
  const lists = reactive<tasksListType[]>(storedList)

  const saveList = () => {
    localStorage.setItem('tasksLists', JSON.stringify(lists))
  }

  const listIds = lists?.map((item) => item.id)
  const newListId = ref((Math.max(...listIds) | 0) + 1)

  const newTaskId = computed(() => {
    return (listId: number) => {
      const list = getList(listId)
      const taskIds = list?.tasks?.map((item) => item.id)
      return (Math.max(...taskIds) | 0) + 1
    }
  })

  const movingItem = reactive<movingItemType>({
    listId: 0,
    itemId: 0
  })

  const addList = () => {
    lists.push({
      id: newListId.value++,
      name: 'New list',
      tasks: []
    })
  }

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

  const setListName = (listId: number, value: string) => {
    const list = getList(listId)
    if (!list) return

    list.name = value
  }

  const setItem = (listId: number, item: taskType) => {
    const list = getList(listId)
    if (!list) return

    list.tasks.push(item)
  }

  return {
    lists,
    newListId,
    newTaskId,
    movingItem,
    saveList,
    addList,
    getList,
    getItem,
    setListName,
    setItem
  }
})
