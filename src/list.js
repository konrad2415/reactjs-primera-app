const List=(props)=>{
    return(
        <div className="list">
             {
                 props.items.map(item=><div> {item.title}</div>
                  
                 )
             }
        </div>
    );
}

export default List;