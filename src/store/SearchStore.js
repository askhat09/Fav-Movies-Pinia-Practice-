import { defineStore } from "pinia";
import { ref } from "vue";
import { useMovieStore } from './MovieStore';

export const useSearchStore = defineStore("searchStore", () => {
	const movies = ref([]);
	const loading = ref(false);

	const search = async (query) => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjZiNTdmNzE4MGI0N2I1YWQ3ZDFhZDc3OWYxNDY2MyIsInN1YiI6IjY1NmFiZWYwNjUxN2Q2MDEyZmE5NDE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAhpPviirDRtpozZNfgmU9ENYM7aWvcwdPfpT2odbA8'
			}
		};
		loading.value = true
		fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
			.then(response => response.json())
			.then(response => {
				movies.value = response.results
				loading.value = false
			})
			.catch(err => console.error(err));
	}

	const addToList = (movie) => {
		const movieStore = useMovieStore();
		movieStore.movies.push({...movie, isWatched: false})
		movieStore.activeTab = 1
	}

	return {
		movies,
		loading,
		search,
		addToList
	}
})