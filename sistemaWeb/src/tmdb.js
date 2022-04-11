const API_KEY = '9a2dea61daa50ce640a8692e3d141f40';
const API_BASE = 'https://api.themoviedb.org/3/';


const basicFetch = (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = req.json();
    return json;
}


export default{
    getHomeList = async () => {
        return[
            {
                slug: 'Originals',
                title: 'Originais da Netflix',
                items: await basicFetch(``)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Voce',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Açao',
                items: []
            },
            {
                slug: 'comedy',
                title: 'comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            }
        ]
    }
}