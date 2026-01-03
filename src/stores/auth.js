import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),

  getters: {
    role_slug: (state) => state.user?.role_slug || null
  }
})
