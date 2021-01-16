import React, { useState } from 'react';

const Button = (props)=>{
    const [count, setCount] = useState(0);
    return(
        <div>
        <p>Has hecho click {count} veces</p>
        { /* actualizamos el state al hacer click con setCount */ }
        <button onClick={() => setCount(count + 1)}>
          Haz click!
        </button>
        <span>El contador está a {count}</span> 
      </div>
    );
}

export default Button;