import React from 'react';
import {Navigation} from "./layout/Navigation";
import {Header} from "./layout/Header";
import Articles from "./layout/Articles";
import Streams from "./layout/Streams";
import Activities from "./layout/Activities";
import Miscellaneous from "./layout/Miscellaneous";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Header />
        <div className="primary-content">
          <Articles />
          <div className="bottom-section">
            <Streams />
            <Activities />
            <Miscellaneous />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
