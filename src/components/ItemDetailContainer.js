import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetails";

const ItemDetailContainer = ({id})=>{

  const [productos, setProductos] = useState([]);

  const getItem = ()=>{
    fetch("./productos.json")
    .then(function (response){
     return response.json();
    }) 
    
    .then(function (data){
      const found = data.find(element => element.id === id)
      console.log(found)
      setProductos(found);
    })
  } 
     
  useEffect(() => {
    setTimeout(() => {
      getItem();
    }, 2000);
  }, []);


  
  if(productos.length === 0) {
    return <> <h4>Cargando productos</h4>
    
    <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
    </>
  }
  else{
    return (
     <> 
    {/* <h3 className="blue-text text-darken-2"> Tienda {greeting.text}!</h3> */}
    
    <ItemDetail productos={productos}  />

    </>
    )

  }
  }
  export default  ItemDetailContainer 
  