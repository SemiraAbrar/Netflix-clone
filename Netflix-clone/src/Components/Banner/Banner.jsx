import React, { useEffect, useState } from 'react'
import instance from '../Axios'
import requests from '../../request.js'
import './Banner.css'
function Banner() {
    const[movie,setMovie]=useState([]);
    useEffect(() => {
      async function fetchData() {
        const request = await instance.get(requests.fetchNetflixOriginals);
        //console.log(request);
        setMovie(request?.data.results[
            Math.floor(Math.random()*request.data.results.length)]);
        return request;
      }
      fetchData();
    }, []);
     console.log(movie);
    //  function truncate(str,n){
    //    return str?.length>n ?str.slice(0,n-1)+"...":str;
    
    //  }
      const learnMore = (desc, event) => {
        let r = event.currentTarget;
        let n = r.previousElementSibling.previousElementSibling;
        const elements = [ r, n];
        elements.forEach((el) => el.classList.toggle("expanded"));
        let d = desc.slice(170, desc.length);
        r.textContent = r.classList.contains("expanded")
          ? "show less"
          : "Learn More";
        n.textContent = n.classList.contains("expanded") ? `${d}` : `...`;
      };
      let desc=movie.overview;
  return (
    <div
      className="banner "
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1> */}
        {movie?.overview && (
          <div className="banner__description ">
          
            {desc.length > 170? desc.slice(0, 170) : desc}
            {desc.length > 170 ? (
              <>
                <span id="remainingdesc">...</span>
                <br />
                <button
                  className="btn btn-outline-danger btn-sm"
                  id="learn"
                  onClick={(event) => learnMore(desc, event)}
                >
                  learn more
                </button>
              </>
            ) : null}
          </div>
        )}
      </div>

      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner