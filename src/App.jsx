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
  const [selectedTopic,setSelectedTopic]= useState()
  let tabContent = <p>Please select a topic.</p>
  if(selectedTopic){
    tabContent= 
    <div id="tab-content">    
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
       </div>
  }
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
          <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>handleSelect('state')}>State</TabButton>

        </menu>
        {tabContent}
        {/* first approach with && */}
        {/* {!selectedTopic && <p>Please select a topic.</p> } 
        
         {selectedTopic && 
         (<div id="tab-content">    
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
       </div>
        ) } */}
        {/* second approach with ternary */}
        {/* {!selectedTopic ? (<p>Please select a topic.</p> ): 
        (
          <div id="tab-content">    
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
       </div>
        )} */}

    
      
      </section>
      </main>
    </div>
  );
}

export default App;