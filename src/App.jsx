import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
function App() {
//selectedTopic is the first element from the array which we get back from the useState
// will be the current data snapshot(current state value provided by React, may change
// if the component function is executed again) for this component execution cycle
// setSelectedTopic:(state updating function): updates teh stored value &
// tells React to re-execute the component function in which useState() was called
  const [selectedTopic,setSelectedTopic]= useState('components')
  const tabContent = "Please click a button";
  function handleSelect(selectedBtn) {
    // selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedBtn)
    console.log(selectedTopic);
}

console.log('App Component Executing/Rendering')
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description} 
          image={CORE_CONCEPTS[0].image} 
          />
     
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>

        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
        {/* component composition */}
          <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>

        </menu>
       <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
       </div>
      </section>
      </main>
    </div>
  );
}

export default App;