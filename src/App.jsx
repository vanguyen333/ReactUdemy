
import CoreConcepts from './components/CoreConCepts.jsx';

import Header from './components/Header/Header.jsx';

import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import Examples from './components/Examples.jsx';
function App() {
  return (
    <>
      <Header />
      <main>
      <CoreConcepts/>
      <Examples/>
      </main>
    </>
  );
}

export default App;