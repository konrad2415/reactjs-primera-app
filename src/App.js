import React from 'react';


const  App=()=> {
  // Create a variable in local scope with let and JS 
  let txt = "Hellow world, I'm a live";

   // Using React JSX hability 
   let txtHTML= <h1>Hello, here is a text inside HTML tags</h1>;
  return (
    <div className="App">
       {txt}<br/>
       {txtHTML}
    </div>
  );
}

export default App;