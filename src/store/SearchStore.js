import { defineStore } from "pinia";
import { useMovieStore } from './MovieStore';

export const useSearchStore = defineStore('searchStore', {
	state: () => ({
		movies: [],
		loading: false,
	}),

	actions: {
		async search (query) {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjZiNTdmNzE4MGI0N2I1YWQ3ZDFhZDc3OWYxNDY2MyIsInN1YiI6IjY1NmFiZWYwNjUxN2Q2MDEyZmE5NDE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAhpPviirDRtpozZNfgmU9ENYM7aWvcwdPfpT2odbA8'
				}
			};
			this.loading = true
			fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
				.then(response => response.json())
				.then(response => {
					this.movies = response.results
					this.loading = false
				})
				.catch(err => console.error(err));
		},

		addToList (movie) {
			const movieStore = useMovieStore();
			movieStore.movies.push({...movie, isWatched: false})
			movieStore.activeTab = 1
		}
	}
})