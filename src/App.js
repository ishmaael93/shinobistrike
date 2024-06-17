import Logoname from "./components/logoname";
import Stats from "./components/stats";
import Balance from "./components/balance";
import ProgressBar from "./components/progressBar";
import Cointap from "./components/cointap";
import Menu from "./components/menu";
import React from "react";


function App() {
  return (
      <div>
        <Logoname />
          <div className="bg-black shadow-custom-shadow rounded-t-[20px]">
            <Stats />
              <Balance />
              <ProgressBar />
              <Cointap />
              <Menu />
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
