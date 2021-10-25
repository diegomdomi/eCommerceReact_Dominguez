import ItemCounts from "./ItemCounts"

const ItemListContainer = (greeting)=>{
    return (
     <> 
    <h3 className="blue-text text-darken-2"> soy {greeting.text}!</h3>
    <ItemCounts stock="5" initial="1" />
    </>
    )
  }
  export default  ItemListContainer 
  