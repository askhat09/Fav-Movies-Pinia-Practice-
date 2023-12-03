import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(1);

  const watchedMovies = computed(() => {
    return movies.value.filter((movie) => movie.isWatched)
  });

  const totalCountMovies = computed(() => movies.value.length);

  const switchWatchStatus = (id) => {
    const idx = movies.value.findIndex(movie => movie.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }

  const setTab = (id) => {
    activeTab.value = id
  }

  const deleteMovie = (id) => {
    movies.value = movies.value.filter(movie => movie.id !== id)
  }

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    switchWatchStatus,
    setTab,
    deleteMovie
  }
})