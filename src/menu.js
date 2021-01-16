import  Search  from './search';
import './style/Menu.css';
import Button from './button'

const Menu = (props) => {
    return(
        <div className="container">
           <div className="subcontainer">
               <div className="logo">
                   {props.title}
               </div>
           </div>
        
        <div className="search"><Search></Search></div>

         <div className="actions">
            <button className="button btn-blue"> +Add new Library</button>
         </div>
         <Button></Button>

        </div>

        
            
        
    );
  }


export default Menu;