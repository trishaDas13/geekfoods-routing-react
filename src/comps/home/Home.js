import React from 'react';
import './Home.css';
import About from './About';

function Home() {
  return (
    <>
      <div className="hero">
            <div className="content">
                <h1>Let us find your</h1>
                <h1 id='lastChild'>Forever Food.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <button id="searchNow">Search Now</button>
                <button id="knowMore">Know More</button>
            </div>
    </div>
    <About/>
    </>
  )
}

export default Home;