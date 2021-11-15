import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetails";
import {useParams}  from "react-router-dom"

const ItemDetailContainer = (greeting)=>{
  
  const{id} = useParams()
  const [productos, setProductos] = useState([]);

  const getItem = ()=>{
    fetch("https://mocki.io/v1/004be0d0-faee-458b-8bfc-f58bfaff8909")
    .then(function (response){
     return response.json();
    }) 
    
    .then(function (data){
      if(id){
        const found = data.find(element => element.id === Number(id))
        setProductos(found)
      }else{
        setProductos(data);
      }


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
    <h3 className="blue-text text-darken-2"> Tienda {greeting.text}!</h3>
    
    <ItemDetail productos={productos}  />

    </>
    )

  }
  }
  export default  ItemDetailContainer 
  