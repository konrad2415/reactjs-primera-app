import React ,{ useState } from 'react';
import "./style/App.css";

import Menu from './menu'
import List from './list'


import star  from './img/star.png'

 function App(){

   // Array with the items at initial state 
   const initialState='{ "books":['+
   '{id:0, rating: 4, title: "Harry Potter y el Cadis de Fuego" , image: "libro01.jpg"},'+
   '{id:0, rating: 3, title: "The Shining" , image: "libro02.jpg"},'+
   '{id:0, rating: 5, title: "El Código Da Vinci" , image: "libro03.jpg"},'+
   '{id:0, rating: 5, title: "El Principito" , image: "libro04.jpg"},'+
   '{id:0, rating: 5, title: "Sobrenatural" , image: "libro05.jpg"}]}';
   
   
  



   const [items,itemsState]= useState(initialState)

    return(
     <div className="App">
        <Menu title="Amase" />
        <List/>
     </div>

    );
 }

 export default App;