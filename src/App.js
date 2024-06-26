import React from 'react';
import Logoname from "./components/logoname";
import Progressbar from "./components/user/progressbar";
import Balance from "./components/user/balance";
import EmblaCarousel from './components/carusel/EmblaCarousel'
import Menu from "./components/menu";
import AnimationVisible from "./components/animationVisible";
import Cointap from "./components/cointap";

const OPTIONS = { axis: 'y' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {

  return (
      <div className="flex flex-col justify-between h-full">

          <AnimationVisible/>
          <div className="mx-[30px] pt-[30px] animation_visible">
              <Logoname/>
              <div className="flex items-center space-x-[30px] mt-[30px]">
                  <Progressbar/>
                  <Balance/>
              </div>
          </div>
          <div id="carusel" className="animation_visible">
              <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
              {/*<Cointap/>*/}
          </div>
          <div className="animation_visible">
              <Menu/>
          </div>

      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
export default App;
