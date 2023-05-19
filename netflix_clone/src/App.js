import React, {useEffect, useState} from 'react';
import Tmdb from "./tmdb";
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import "./components/FeaturedMovie.css"
import "./App.css"
import tmdb from './tmdb';
import Header from './components/header'
import './components/header.css'

export default () => {
     

  const[ movieList, setMovieList] = useState ([])
  const [ FeatureData , setFeatureData] = useState(null)
  const [ blackheader, setBlackHeader] = useState(false) 
  
   useEffect(() => {
   const loadAll = async () =>{
    let list = await Tmdb.getHomeList()
    console.log(list);
    setMovieList(list)
        
    let myBestMovies = list.filter(i=>i.slug === 'trending')
    let chosemRandow = Math.floor(Math.random() * (myBestMovies[0].items.results.length - 1))
    let chosem = myBestMovies[0].items.results[chosemRandow]
    let chosemInfo = await tmdb.getMovieInfo(chosem.id, "movie")
    setFeatureData(chosemInfo)  
     }
   loadAll();
  }, [])
  useEffect(() =>{
    const scrollListener = ()=>{
      if(window.scrollY > 100){
        setBlackHeader(true)
      }
      else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  }, [] )

  return(
    <div className='page'>
      <Header black={blackheader}/>
      {
        FeatureData  &&
      <FeaturedMovie item={FeatureData}/>
      }

      <section className='lists'>
        {movieList.map((item, key)=> (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito com carinha gente boua 
      
      </footer>
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
