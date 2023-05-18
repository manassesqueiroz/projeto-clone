

const API_KEY = '84fa30a717c6ff219da0d9cfe4f275dd'
const API_BASE = 'https://api.themoviedb.org/3'


/* 
- originais da netflix
- recomendados
- em alta (top rated)
- ação
- terror 
- romance
- documentarios
*/

const basicFatch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}?language=pt-BR&page=1&api_key=${API_KEY}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
           
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items : await basicFatch(`/movie/550/recommendations`)
            },
            {
                slug: 'toprated',
                title: 'EM Alta',
                items : await basicFatch(`/movie/top_rated`)
            },
            {
                slug: 'series',
                title: 'seriados',
                items : await basicFatch(`/tv/popular`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId){
            switch(type){
                case 'movie':
                info = await basicFatch(`/movie/${movieId}`)
                break;
                case 'tv':
                info = await basicFatch(`/tv/${movieId}`)
                break;
                default:
                    info = null
                break
            }    
        }
        return info
    }

}