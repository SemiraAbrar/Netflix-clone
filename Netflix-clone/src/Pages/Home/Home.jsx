import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Row from '../../Components/Row/Row'
import requests from '../../request.js'
import Banner from '../../Components/Banner/Banner.jsx'
import Navbar1 from '../../Components/Navbar/Navbar1.jsx'
function Home() {
  return (
    <>
      <Navbar1/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
     
   </>
  );
}

export default Home