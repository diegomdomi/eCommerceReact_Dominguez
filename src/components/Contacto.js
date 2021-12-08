
 const Contacto = ()=>{
    return(
        <>
        <div className="container logo">
          <div className="row redes">
            <div className="col l6 encabezado">
              <h5>Encontranos en nuestras redes</h5>
             </div>
            <div className="col l2">
              <a href="https://instagram.com/vickskobaru?utm_medium=copy_link" target="_blank"rel='noreferrer'
              title="enlace a nuestra cuenta de instagram">
              <img src="./logo-instagram.svg" alt="logo Instagram"/></a>
            </div>
            <div className="col l2">
              <a href="https://www.facebook.com/vicky.kobaru" target="_blank" rel='noreferrer' title="enlace a nuestra cuenta de Facebook">
              <img src="./logo-facebook.svg" alt="logo Facebook"/> </a>
            </div>

            <div className="col l2">
              <a href="https://api.whatsapp.com/send?phone=541140804156" target="_blank"rel='noreferrer'
              title="enlace a nuestra linea de whatsapp">
              <img src="./logo-whatsapp.svg" alt="logo Whatsapp"/> </a>
            </div>
        </div>
        <hr/>

      <div className="row">
        <div className="col l4">
          <h6>Ubicación</h6>
          <p> San Carlos de Bariloche</p>
          <p>Neuquén - Argentina</p>
        </div>

        <div className="col l4">
          <h6>Contactanos</h6>
          <p>almacenpastelero@gmail.com</p>
          <p>+ 54 2944 1157474</p>
          <p>+ 54 2944 2456789</p>
        </div>

        <div className="col l4">
         <h6>Localización</h6>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395590.07926256274!2d-71.5782879189662!3d-41.18764046843717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b72dbb708e1%3A0xd91b7e92f820aa94!2sCentro%20C%C3%ADvico%20Bariloche!5e0!3m2!1ses!2sad!4v1621182650420!5m2!1ses!2sad"
          width="160" height="150"
          border="solid 1px slategrey"
          margin="10px"
          allowFullScreen
          title='maps'
          />
        </div>

        </div>
        </div>
        </>
    )
}
export default Contacto