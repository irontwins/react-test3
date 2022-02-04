import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {  
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`)
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(()=>{
      getMovies();
    }, []); 
        
    return (
      <div>
        <h1>코인</h1>
          { loading? 
            <strong>로딩중...</strong> : 
            <div>
              {movies.map((item) =>
                  <Movie 
                    key={item.id}
                    id={item.id}
                    coverImg={item.medium_cover_image} 
                    title={item.title_english} 
                    summary={item.summary} 
                    genres={item.genres} 
                  />
              )}
            </div>
          }
          
      </div>
    );
}

export default Home;