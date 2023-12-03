import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    activeTab: 1,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((movie) => movie.isWatched)
    },

    totalCountMovies() {
      return this.movies.length
    }
  },
  actions: {
    switchWatchStatus(id) {
      const idx = this.movies.findIndex(movie => movie.id === id)
      this.movies[idx].isWatched = !this.movies[idx].isWatched
    },

    setTab(id) {
      this.activeTab = id
    },

    deleteMovie(id) {
      this.movies = this.movies.filter(movie => movie.id !== id)
    }
  }
})