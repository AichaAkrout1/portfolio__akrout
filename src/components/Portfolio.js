import React from 'react'
import Myproject1 from '../assests/images/My project-1.png';
import Myproject2 from '../assests/images/My project-2.png';
import Myproject3 from '../assests/images/My project-3.png';
import "../Scss/portfolio.css";





function Portfolio() {
  return (
    <section id="portfolio" > 
      <h5 style={{marginTop:"-9rem"}}>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Myproject1} alt='' />
          </div>
            <h3>Movie App React JS</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/AichaAkrout1/checkpoint_movieapp_router" className='btn primary' target='_blank' style={{marginTop:"30px"}}>Github</a>
            <a href="https://linkedin.com" className='btn btnn' style={{marginTop:"30px"}} target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Myproject2} alt='' />
          </div>
            <h3>Apple Website With MERN (MongoDB, Express, React ,Nodejs) Stack</h3>
            <div className='portfolio_item-cta'>
            <a href="https://github.com/AichaAkrout1/Astore1" className='btn primary' target='_blank'>Github</a>
            <a href="https://linkedin.com" className='btn btnn'    target='_blank'>Live Demo</a>
          </div>
          
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Myproject3} alt=''/>
          </div>
            <h3>Coffee Shop Website HTML, CSS and JavaScript</h3>
            <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn primary' target='_blank'>Github</a>
            <a href="https://linkedin.com" className='btn btnn'  target='_blank'>Live Demo</a>
          </div>
          
        </article>
      </div>

    </section>
  )
}

export default Portfolio