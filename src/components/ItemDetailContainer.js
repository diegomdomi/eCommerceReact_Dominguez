import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetails";
import {useParams}  from "react-router-dom"
import {firestore}  from "./firebase"
import {NavLink}  from "react-router-dom"

const ItemDetailContainer = (greeting)=>{
  
  const{id} = useParams()
  const [productos, setProductos] = useState([]);
  useEffect(() => {

    const db = firestore

    const collection = db.collection("items")
    const query = collection.doc(id)
    const promesa = query.get()
      promesa
        .then((documento) =>{
          setProductos({id: documento.id,...documento.data()})
          console.log(documento.data())
        })
        .catch(()=>{
          console.log("Error")
        });
    



  },[id])

  // const getItem = ()=>{
  //   fetch("https://mocki.io/v1/004be0d0-faee-458b-8bfc-f58bfaff8909")
  //   .then(function (response){
  //    return response.json();
  //   }) 
    
  //   .then(function (data){
  //     if(id){
  //       const found = data.find(element => element.id === Number(id))
  //       setProductos(found)
  //     }else{
  //       setProductos(data);
  //     }


  //   })
  // } 
     
  // useEffect(() => {
  //   setTimeout(() => {
  //     getItem();
  //   }, 2000);
  // }, []);


  
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
    <NavLink to="/"><h6 align="center">volver al catálogo</h6></NavLink>
    <h4 className="blue-text text-darken-2" align="center"> Detalle {greeting.text}</h4>
    
    <ItemDetail  productos={productos} />

    </>
    )
  
  }
}
 export default  ItemDetailContainer 
  