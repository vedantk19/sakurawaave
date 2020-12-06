import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <div className="navbar-brand" style={{fontFamily: 'helvetica neue', 
      fontStyle: 'italic', fontWeight: 'bold', color: '#fff'}}>SakuraWave</div>
      </div>
      </nav>

      <section style={{marginTop: '1rem', 
      marginLeft: '1rem', marginRight: '1rem'}}>
      <div className='card-deck'>
      <div className="card" style={{width: '18rem'}} 
      className="card text-white bg-dark mb-3">
      <img src="https://i.pinimg.com/originals/c6/2c/05/c62c055ede6aadbb1f94a555071c98b9.jpg" 
      className="card-img-top" alt="instagamimg"></img>
      <div className="card-body">
      <h5 className="card-title">Our Instagram</h5>
      <p className="card-text">For daily posts and interactions follow us on Instagram by clicking the button below.</p>
      <a href="https://www.instagram.com/sakurawaave/" 
      target="_blank" className="btn btn-primary">@sakurawaave</a>
      </div>
      </div>
      <div className="card" style={{width: '18rem'}}
      class="card text-white bg-dark mb-3">
      <img src="https://i.ytimg.com/vi/jR8bBrGzK5Q/hqdefault.jpg" 
      className="card-img-top" alt="youtubeimg"></img>
      <div className="card-body">
      <h5 className="card-title">Our Youtube</h5>
      <p className="card-text">
        Check out our anime discussions and aesthetic videos on Youtube.
       </p>
      <a href="https://www.youtube.com/channel/UCM07JtxIuKRrEOTXmfULjPQ?view_as=subscriber" 
      target="_blank" className="btn btn-primary">SakuraWave channel</a>
      </div>
      </div>
      <div className="card" style={{width: '18rem'}}
      class="card text-white bg-dark mb-3">
      <img src="https://i.pinimg.com/originals/a3/51/82/a351820b268070215664dcdbd4dc7a84.jpg" 
      className="card-img-top" alt="twitterimg"></img>
      <div className="card-body">
      <h5 className="card-title">Our Twitter</h5>
      <p className="card-text">
        Interesting discussions about anime and a whole community. Follow up!
       </p>
      <a href="https://twitter.com/sakurawave1311?s=09" 
      target="_blank" className="btn btn-primary">@sakurawave1311</a>
      </div>
      </div>
      </div>

      <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <div className="navbar-brand" style={{fontFamily: 'helvetica neue', 
      fontStyle: 'italic', fontWeight: 'bold', color: '#fff'}}>Coming Soon.</div>
      </div>
      </nav>

    </section>

      
    </React.Fragment>
  );
}

export default App;

