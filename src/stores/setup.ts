import { ref } from 'vue'
import { defineStore } from 'pinia'

export const setupStore = defineStore('setup', () => {
  const languageCode = ref('en-GB')

  return { languageCode }
})
