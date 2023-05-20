import React,{useState} from "react";
import "./MovieRow.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default ({ title, items }) => {

  const[scrollX, setScrollX] = useState(0);

  const handleLeftArrow = ()=>{
    let x = scrollX + window.innerWidth / 2
    if(x > 0){
      x=0;
    }
    setScrollX(x)
  }
  const handleRightArrow = ()=>{
    let x = scrollX - window.innerWidth / 2
    let maxWidth =  items.results.length * 180
    if((window.innerWidth - maxWidth) > x ){
      x =  (window.innerWidth - maxWidth) -50
    }
    setScrollX(x)
  }
  
console.log(items.results.leght)
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{fontSize:70}}/>
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{fontSize:70}}/>
        </div>
        <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft:scrollX,
          width: items.results.length * 180

          
        }}>
          {items.results.leght != 0 &&
            items.results.map((movie, key) => (
              <div className="movieRow--item" key={key} >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "/image/imagem.jpg"
                  }
                  alt={`${movie.original_title}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
// <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
