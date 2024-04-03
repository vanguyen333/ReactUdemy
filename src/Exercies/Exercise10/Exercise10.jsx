

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
import React from 'react';
export default function App() {
    
    const [showAlert,setShowAlert]= React.useState(false);
    function handleShowAlert (){
        setShowAlert(true);
    }
    
    function handleHideAlert(){
        setShowAlert(false);
    }
    
    return (
       
      <div>
       {showAlert &&
        (<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
             <button onClick={handleHideAlert}>Proceed</button>
        </div>
      ) }
        <button onClick={handleShowAlert}>Delete</button>
      </div>    
    );
}
