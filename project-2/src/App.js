import React from 'react';
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className = 'balloon-animation'>    
        <Animated
          className="flying-cloud" 
          src = '/chmurka.png'
          ratioX ='0.1'
          ratioY = '0.11' 
          />
        <Animated
          className="flying-cloud" 
          src = '/chmurka.png'
          ratioX ='0.36'
          ratioY = '0.34' 
        />
        <Animated
          className="flying-cloud" 
          src = '/chmurka.png'
          ratioX ='0.2'
          ratioY = '0.24' 
        />
        <Animated
          className="flying-cloud" 
          src = '/chmurka.png'
          ratioX ='0.26'
          ratioY = '0.34' 
        />
        <Animated
          className="flying-cloud" 
          src = '/chmurka.png'
          ratioX ='0.1'
          ratioY = '0.11' 
        />
        <Animated
          className="flying-cloud" 
          src = '/chmurka.png'
          ratioX ='0.13'
          ratioY = '0.53' 
        />
        <Animated
          className="flying-cloud" 
          src = '/ballon1.png'
          ratioX ='0.07'
          ratioY = '0.3' 
        />
      </div>
      </header>
    </div>
  );
}

export default App;
