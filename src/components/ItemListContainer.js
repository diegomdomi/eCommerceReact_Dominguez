import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams}  from "react-router-dom"
import {firestore}  from "./firebase"

const ItemListContainer = (greeting)=>{
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = firestore

    const collection = db.collection("items")
    const promesa = collection.get()
          promesa
              .then(documento =>{
 
                setProductos(documento.docs.map(doc=>({...doc.data(),id : doc.id})))
              })
              .catch(() => {
                console.log("Algo salió mal")
              })
  },[])


  
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
    <h3 className="blue-text text-darken-2" align="center"> Tienda {greeting.text}</h3>
    
    <ItemList productos={productos} />

    </>
    )

  }
  }
  export default  ItemListContainer 
  