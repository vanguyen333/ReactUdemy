import { useState } from 'react';
import TabButton from "./TabButton";
import { EXAMPLES } from '../data.js';

export default function Examples() {
    const [selectedTopic,setSelectedTopic]= useState();
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
  console.log('App Component Executing/Rendering');
    return (
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
    )
}