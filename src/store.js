import { reactive } from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=692f0d50db196747e2b3f84e4902698b&query=',
    movies: []
})