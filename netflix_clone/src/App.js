import React, {useEffect, useState} from 'react';
import Tmdb from "./tmdb";
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import "./components/FeaturedMovie.css"
import "./App.css"
import tmdb from './tmdb';



export default () => {
     

  const[ movieList, setMovieList] = useState ([])
  const [ FeatureData , setFeatureData] = useState([])
  
  
   useEffect(() => {
   const loadAll = async () =>{
    let list = await Tmdb.getHomeList()
    console.log(list);
    setMovieList(list)
        
    let myBestMovies = list.filter(i=>i.slug === 'trending')
    let chosemRandow = Math.floor(Math.random() * (myBestMovies[0].items.results.length - 1))
    let chosem = myBestMovies[0].items.results[chosemRandow]
    let chosemInfo = await tmdb.getMovieInfo(chosem.id, "movie")
 console.log(chosemInfo);
    
     }
   loadAll();
  }, [])

  return(
    <div className='page'>

      {
        FeatureData  &&
      <FeaturedMovie item={FeatureData}/>
      }

      <section className='lists'>
        {movieList.map((item, key)=> (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
};

// // useEffect(async () => {
// //     let list = await tmdb.getHomeList();
// //     console.log(list);

// // }, []);

// useEffect(() => {
//   (async () => {
//     let list = await tmdb.getHomeList();
//   })();

//   console.log(list)
// });
