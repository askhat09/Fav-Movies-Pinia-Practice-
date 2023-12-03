<template>
  <form @submit.prevent="searchStore.search(SearchMovie)">
    <input
      type="text"
      v-model="SearchMovie"
      class="search-input"
      placeholder="Input movie"
    />
  </form>
	<Loader v-if="searchStore.loading" />
	<div v-else>
		<Movie
		v-for="movie of searchStore.movies"
		:key="movie.id"
		:movie="movie"
    :is-search="true"
	/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../store/SearchStore';
import Loader from '../components/Loader.vue';
import Movie from '../components/Movie.vue';

const SearchMovie = ref('');
const searchStore = useSearchStore();
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>