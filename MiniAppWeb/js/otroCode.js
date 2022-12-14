window.addEventListener("load", () => {

    function CalcularParalelepipedo() {
        const datos = new FormData(formularioDeParalelepipedos);
        const unLado = Number(datos.get("unLado"));
        const otroLado = Number(datos.get("otroLado"));
        const perimetro = unLado * 2 + otroLado * 2;
        const area = unLado * otroLado;
        const contenedorRespuesta = document.querySelector("#respuestaParalelepipedo");
        contenedorRespuesta.textContent= "Perimetro = " + perimetro.toString() 
                                         + "\n"
                                         + "Area = " + area.toString();
    }


    const formularioDeParalelepipedos = document.querySelector("#formularioDeParalelepipedos");
    formularioDeParalelepipedos.addEventListener('submit', (event) => {
        event.preventDefault();
        CalcularParalelepipedo({test: 'ok'});
    });

});